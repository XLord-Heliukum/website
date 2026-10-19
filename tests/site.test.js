/**
 * 极简核心页冒烟测试。
 *
 * 运行：npm test
 *
 * 覆盖：
 *  - 中央渲染出站点名 XLord·Heliukum 与标语
 *  - 左下角悬浮球默认收起（面板不渲染）
 *  - 点击悬浮球展开后，渲染出全部子域名链接且指向正确地址
 */
import { describe, it, expect, afterEach } from 'vitest'
import { createApp, nextTick } from 'vue'
import CoreView from '../src/components/CoreView.vue'
import { site } from '../src/data/site.js'

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

describe('极简核心页', () => {
  it('渲染出站点名 XLord·Heliukum', () => {
    const { root } = mount(CoreView)
    expect(root.textContent).toContain('XLord·Heliukum')
  })

  it('渲染出标语', () => {
    const { root } = mount(CoreView)
    expect(root.textContent).toContain(site.coreTagline)
  })

  it('悬浮球默认收起，面板不渲染', () => {
    const { root } = mount(CoreView)
    const fab = root.querySelector('.fab')
    expect(fab).not.toBeNull()
    expect(fab.classList.contains('open')).toBe(false)
    expect(root.querySelector('.fab-panel')).toBeNull()
  })

  it('点击悬浮球展开后显示全部子域名链接', async () => {
    const { root } = mount(CoreView)
    const btn = root.querySelector('.fab-btn')
    expect(btn).not.toBeNull()

    btn.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
    await nextTick()
    await nextTick()

    const panel = root.querySelector('.fab-panel')
    expect(panel).not.toBeNull()

    const links = [...panel.querySelectorAll('a')]
    expect(links).toHaveLength(site.subdomains.length)

    const hrefs = links.map((a) => a.getAttribute('href'))
    site.subdomains.forEach((s) => expect(hrefs).toContain(s.url))

    // 子域名链接都新标签页打开
    links.forEach((a) => expect(a.getAttribute('target')).toBe('_blank'))
  })
})
