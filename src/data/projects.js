/**
 * 精选作品集 —— 数据驱动，增删改这里就行。
 *
 * 每个项目字段：
 *   slug        用于锚点与（若有）图标文件名，保持唯一
 *   title       名称（双语）
 *   slogan      一句话副标题（双语）
 *   description 详情 modal 里的长描述（双语）
 *   stack       技术栈标签（语言无关）
 *   links       [[文案, 链接], ...] —— 文案用纯字符串即可
 *   themeColor  该项目的强调色，用在卡片/详情的图标与按钮上
 */
export const projects = [
  {
    slug: 'mchub',
    title: { zh: 'MChub', en: 'MChub' },
    slogan: {
      zh: '跨平台的 Minecraft 启动器',
      en: 'Cross-platform Minecraft launcher',
    },
    description: {
      zh: '用 .NET 10 + Avalonia + FluentAvalonia 打造的现代化 Minecraft 启动器，支持多账号、多版本与模组管理，界面跟随 Fluent 设计语言。',
      en: 'A modern Minecraft launcher built with .NET 10, Avalonia and FluentAvalonia — multi-account, multi-version and mod management with a Fluent-designed UI.',
    },
    stack: ['.NET 10', 'Avalonia', 'FluentAvalonia'],
    links: [
      ['GitHub', 'https://github.com/Hub-code-develop/MChub'],
      ['官网', 'https://mchub.code.hub-develop.top/'],
    ],
    themeColor: '#00b4d8',
  },
  {
    slug: 'lithium',
    title: { zh: 'Lithium', en: 'Lithium' },
    slogan: {
      zh: '跨平台 Wine 封装',
      en: 'Cross-platform Wine wrapper',
    },
    description: {
      zh: '用 C# / .NET / Avalonia 重写的 Wine 封装层（Whisky 的精神续作），让在 macOS 上运行 Windows 应用变得更顺手。',
      en: 'A Wine wrapper rewritten in C# / .NET / Avalonia — a spiritual successor to Whisky, making Windows apps on macOS friendlier.',
    },
    stack: ['C#', '.NET', 'Avalonia'],
    links: [['GitHub', 'https://github.com/XLord-Heliukum/Lithium']],
    themeColor: '#6d28d9',
  },
  {
    slug: 'sulfur-block-launcher',
    title: { zh: 'SulfurBlockLauncher', en: 'SulfurBlockLauncher' },
    slogan: {
      zh: '轻量 Minecraft 启动器',
      en: 'Lightweight Minecraft launcher',
    },
    description: {
      zh: 'Sulfur 系列的 Minecraft 启动器现代重写，专注启动速度与干净的工作流，是 MChub 之前的那一支探索。',
      en: 'A modern rewrite of the Sulfur-series Minecraft launcher, focused on launch speed and a clean workflow — the lineage before MChub.',
    },
    stack: ['C#', 'Avalonia'],
    links: [['GitHub', 'https://github.com/XLord-Heliukum/SulfurBlockLauncher']],
    themeColor: '#16a34a',
  },
  {
    slug: 'livelypbr-classic',
    title: { zh: 'LivelyPBR-Classic', en: 'LivelyPBR-Classic' },
    slogan: {
      zh: 'labPBR 物理材质包',
      en: 'labPBR physical texture pack',
    },
    description: {
      zh: '面向 Minecraft Java 版（1.20 ~ 26.3）的 Programmer Art 风格 labPBR 1.3 物理材质包，适配 Lively 光影。',
      en: 'A Programmer Art style labPBR 1.3 physical texture pack for Minecraft Java (1.20 ~ 26.3), tuned for the Lively shader.',
    },
    stack: ['Python', 'Minecraft', 'labPBR'],
    links: [['GitHub', 'https://github.com/XLord-Heliukum/LivelyPBR-Classic']],
    themeColor: '#db2777',
  },
  {
    slug: 'livelypbr-rpg',
    title: { zh: 'LivelyPBR-RPG', en: 'LivelyPBR-RPG' },
    slogan: {
      zh: '原版风 PBR 材质包',
      en: 'Vanilla-style PBR texture pack',
    },
    description: {
      zh: '基于 Minecraft 原版纹理制作的 PBR 材质包，在保留原版观感的同时提供物理光照细节，适配 Lively 光影。',
      en: 'A PBR pack built on Minecraft’s vanilla textures — keeps the original look while adding physical lighting detail for the Lively shader.',
    },
    stack: ['Python', 'Minecraft', 'PBR'],
    links: [['GitHub', 'https://github.com/XLord-Heliukum/LivelyPBR-RPG']],
    themeColor: '#ea580c',
  },
  {
    slug: 'fluentnext',
    title: { zh: 'FluentNext', en: 'FluentNext' },
    slogan: {
      zh: '现代博客引擎',
      en: 'Modern blog engine',
    },
    description: {
      zh: '纯 .NET 后端生成器（读 Markdown 产 content.json / atom.xml / sitemap.xml）+ Blazor WebAssembly 前端，用来取代 Hexo 承载本站博客。',
      en: 'A pure .NET backend generator (Markdown → content.json / atom.xml / sitemap.xml) plus a Blazor WebAssembly frontend, replacing Hexo to power this site’s blog.',
    },
    stack: ['.NET', 'Blazor', 'WASM'],
    links: [
      ['后端', 'https://github.com/XLord-Heliukum/fluentnext-backend'],
      ['前端', 'https://github.com/XLord-Heliukum/fluentnext-frontend'],
      ['博客', 'https://xlord.hub-develop.top/blog/'],
    ],
    themeColor: '#0ea5e9',
  },
  {
    slug: 'audio2video',
    title: { zh: 'audio2video', en: 'audio2video' },
    slogan: {
      zh: '音频转进度条视频',
      en: 'Audio to progress-bar video',
    },
    description: {
      zh: '把任意音频转成带进度条与歌名的视频，纯黑背景、可自定义字体与进度条颜色，适合做分享用的音乐卡片。',
      en: 'Turns any audio into a video with a progress bar and track name — pure black background, customizable font and progress-bar color, great for shareable music cards.',
    },
    stack: ['Python'],
    links: [['GitHub', 'https://github.com/XLord-Heliukum/audio2video']],
    themeColor: '#8b5cf6',
  },
  {
    slug: 'playit-connect',
    title: { zh: 'playit-connect', en: 'playit-connect' },
    slogan: {
      zh: 'Rust 小工具',
      en: 'A small Rust utility',
    },
    description: {
      zh: '用 Rust 写的小工具，面向特定场景的轻量连接/转发需求，代码短小但真能跑起来。',
      en: 'A small Rust utility for lightweight connect / forward needs in a specific scenario — short code that actually runs.',
    },
    stack: ['Rust'],
    links: [['GitHub', 'https://github.com/XLord-Heliukum/playit-connect-for-sl']],
    themeColor: '#475569',
  },
]

export default projects
