const { description } = require('../../package')

module.exports = {
  theme: "book",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '梦华录',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '赵盼儿东京历险记',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '出圈',
        link: '/出圈/',
      },
      {
        text: '线下',
        link: '/线下/',
      },
      {
        text: '二创',
        link: '/二创/',
      },
      {
        text: '数据',
        link: '/数据/',
      }
    ],
    sidebar: {
      '/出圈/': [
        {
          title: '出圈',
          collapsable: false,
          children: [
            '',
            '官媒'
          ]
        }
      ],
      '/数据/': [
        {
          title: '数据',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/二创/': [
        {
          title: '二创',
          collapsable: false,
          children: [
            '',
            '插画',
            '同人曲'
          ]
        }
      ],

      '/线下/': [
        {
          title: '线下',
          collapsable: false,
          children: [
            '',
            '喜茶',
            '奈雪的茶',
            "十三余",
            '国风市集',
            "剧本杀",
            "点茶",
            "文化"
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
