import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '郑州大学开源镜像站Wiki',
  description: 'WIKI 4 Y0U',
  base: '/wiki/',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0071e3' }],
    ['meta', { name: 'keywords', content: '郑州大学,开源镜像,mirror,ubuntu,arch,docker,mysql,postgresql,qt,ctan' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'ZZU Mirror',

    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Linux 发行版',
        items: [
          { text: 'Ubuntu', link: '/ubuntu' },
          { text: 'Ubuntu Releases', link: '/ubuntu-releases' },
          { text: 'Ubuntu Ports', link: '/ubuntu-ports' },
          { text: 'Arch Linux', link: '/archlinux' },
          { text: 'Arch Linux CN', link: '/archlinuxcn' },
        ],
      },
      {
        text: '常用软件',
        items: [
          { text: 'Docker CE', link: '/docker-ce' },
          { text: 'MySQL', link: '/mysql' },
          { text: 'PostgreSQL', link: '/postgresql' },
          { text: 'Qt', link: '/qt' },
          { text: 'CTAN', link: '/ctan' },
        ],
      },
      { text: '文档总览', link: '/README' },
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '主页', link: '/' },
          { text: '文档总览', link: '/README' },
        ],
      },
      {
        text: 'Linux 发行版',
        collapsed: false,
        items: [
          { text: 'Ubuntu', link: '/ubuntu' },
          { text: 'Ubuntu Releases', link: '/ubuntu-releases' },
          { text: 'Ubuntu Ports', link: '/ubuntu-ports' },
          { text: 'Arch Linux', link: '/archlinux' },
          { text: 'Arch Linux CN', link: '/archlinuxcn' },
        ],
      },
      {
        text: '常用软件',
        collapsed: false,
        items: [
          { text: 'Docker CE', link: '/docker-ce' },
          { text: 'MySQL', link: '/mysql' },
          { text: 'PostgreSQL', link: '/postgresql' },
          { text: 'Qt', link: '/qt' },
          { text: 'CTAN', link: '/ctan' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nanami233333/agents-a068b4f494' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },

    footer: {
      message: 'Made with ❤ at Zhengzhou University',
      copyright: 'ZZU Open Source Mirror',
    },

    docFooter: { prev: '上一篇', next: '下一篇' },

    outline: { level: [2, 3], label: '本页内容' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },
  },
})
