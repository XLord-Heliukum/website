import { icons } from './icons.js'

/**
 * ============================================================
 *  站点内容配置 —— 日常只改这个文件就够了
 * ============================================================
 *
 *  关于双语：凡是 `{ zh: '…', en: '…' }` 这样的字段都会跟着语言切换走
 *  （取值逻辑在 src/composables/useLocale.js 的 t()）。
 *  项目名、链接、颜色这些语言无关的照旧直接写字符串。
 */

// QQ 加好友短链。Contact 按钮和社交图标共用这一个，想换联系方式改这一行就够
const QQ_LINK = 'https://qm.qq.com/q/Jjjl1fH1OE'

export const site = {
  /* ---------- 1. 身份（语言无关） ---------- */

  handle: 'xLord_cangjie',
  // 页脚/签名用的短名
  shortName: 'xLord',

  /* ---------- 2. 首屏 Hero ---------- */
  hero: {
    // 名字上方的小标签（等宽风）
    eyebrow: { zh: 'XLORD · HELIUKUM', en: 'XLORD · HELIUKUM' },
    // 主标题（大号）
    name: 'XLord·Heliukum',
    // 副标题 / 身份标签（多语言数组，会并列展示）
    roles: {
      zh: ['全栈开发', '开源共建者'],
      en: ['Full-stack Developer', 'Open Source Builder'],
    },
    // 一句引言
    motto: {
      zh: '迎着所有不确定，勇往直前。',
      en: 'Forge ahead bravely against all uncertainties.',
    },
  },

  /* ---------- 3. 头像 ---------- */
  // 换头像：覆盖 public/avatar-cutout.png 即可
  avatar: './avatar-cutout.png',

  /* ---------- 4. 联系方式 ---------- */
  contact: {
    url: QQ_LINK,
    label: { zh: '联系我', en: 'Get in Touch' },
  },

  /* ---------- 5. 社交链接 ---------- */
  // url 留空字符串 = 该项不显示，填上就自动出现
  socials: [
    { name: 'GitHub', icon: icons.github, url: 'https://github.com/XLord-Heliukum/', color: '#1f1e1d' },
    { name: 'Blog', icon: icons.chat, url: 'https://xlord.hub-develop.top/blog/', color: '#1f6feb' },
    { name: 'Bilibili', icon: icons.bilibili, url: '', color: '#00aeec' },
    { name: 'Email', icon: icons.mail, url: '', color: '#f47060' },
    { name: 'QQ', icon: icons.qq, url: QQ_LINK, color: '#db9807' },
  ],

  /* ---------- 6. 关于区 ---------- */
  about: {
    title: { zh: '关于', en: 'About' },
    paragraphs: {
      zh: [
        '我做跨平台应用和开发工具，主要围绕 .NET 生态和现代 Web 技术栈——比起代码写得多漂亮，我更在意它是不是真的能跑起来。',
        '目前在 CodeHub 组织做开源，维护几个项目，偶尔也碰点 Minecraft 相关的东西。',
      ],
      en: [
        'I build cross-platform applications and developer tooling, mostly around the .NET ecosystem and the modern web stack — and I care more about whether something actually runs than how clever it looks.',
        'Currently building with CodeHub, maintaining a few open source projects, and occasionally shipping Minecraft-related things.',
      ],
    },
  },

  /* ---------- 7. 页脚 ---------- */
  footer: {
    copyright: {
      zh: '用热爱和代码打造。',
      en: 'Crafted with passion and code.',
    },
    ownerUrl: 'https://github.com/XLord-Heliukum',
  },

  /* ---------- 8. 按钮文案 ---------- */
  buttons: {
    about: { zh: '关于我', en: 'About' },
    projects: { zh: '项目', en: 'Projects' },
    contact: { zh: '联系我', en: 'Get in Touch' },
  },

  /* ---------- 9. 极简核心页（xlord.hub-develop.top 主域） ---------- */
  // 中央主显示标语（极简页只展示名字 + 这句）
  coreTagline: '迎着所有不确定，勇往直前。',
  // 左下角悬浮球里的子域名链接（组织 / 社区门户）
  subdomains: [
    { name: 'Hub-develop', url: 'https://hub-develop.top/', color: '#6feec2' },
    { name: 'Code Hub', url: 'https://code.hub-develop.top/', color: '#2bbd86' },
  ],
}

export default site
