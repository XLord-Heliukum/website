/**
 * 站点冒烟测试（hyliu 风格重写后）。
 *
 * 运行：npm test
 *
 * 覆盖：
 *  - 首屏 Hero 渲染出姓名与联系链接
 *  - 中英切换跟着 t() 走
 *  - 项目区按数据渲染出对应数量的卡片，且点击能打开详情 modal
 */
import { describe, it, expect, afterEach } from 'vitest'
import { createApp, nextTick } from 'vue'
import HeroView from '../src/components/HeroView.vue'
import ProjectsSection from '../src/components/ProjectsSection.vue'
import { projects } from '../src/data/projects.js'
import { setLocale } from '../src/composables/useLocale.js'

let mounted = []

function mount(Component) {
  const root = document.createElement('div')
  document.body.appendChild(root)
  const app = createApp(Component)
  app.mount(root)
  const entry = { root, app }
  mounted.push(entry)
  return entry
}

afterEach(() => {
  mounted.forEach(({ root, app }) => {
    try {
      app.unmount()
      root.remove()
    } catch {
      /* 清理失败无所谓 */
    }
  })
  mounted = []
})

describe('首屏 Hero', () => {
  it('渲染出站点名 XLord·Heliukum', () => {
    const { root } = mount(HeroView)
    expect(root.textContent).toContain('XLord·Heliukum')
  })

  it('联系按钮指向 QQ 短链并新标签页打开', () => {
    const { root } = mount(HeroView)
    const link = [...root.querySelectorAll('a[href]')].find((a) =>
      (a.getAttribute('href') || '').includes('qm.qq.com'),
    )
    expect(link).toBeTruthy()
    expect(link.getAttribute('target')).toBe('_blank')
  })

  it('语言切换：英文显示 Full-stack Developer，中文显示 全栈开发', async () => {
    setLocale('en')
    const en = mount(HeroView)
    expect(en.root.textContent).toContain('Full-stack Developer')

    setLocale('zh')
    const zh = mount(HeroView)
    expect(zh.root.textContent).toContain('全栈开发')
    expect(zh.root.textContent).not.toContain('Full-stack Developer')
  })
})

describe('项目区', () => {
  it(`按数据渲染出 ${projects.length} 张卡片`, () => {
    const { root } = mount(ProjectsSection)
    expect(root.querySelectorAll('.card')).toHaveLength(projects.length)
  })

  it('点击卡片打开详情 modal', async () => {
    const { root } = mount(ProjectsSection)
    const card = root.querySelector('.card')
    expect(card).not.toBeNull()

    card.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
    await nextTick()
    await nextTick()

    expect(root.querySelector('.overlay')).not.toBeNull()
    expect(root.querySelector('.detail')).not.toBeNull()
  })
})
