module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  title: 'DCBR Documentation',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },

    ],
    sidebar: [


      {
        title: 'Inspector',
        collapsable: false,
        children: [
          '/guide/',
          '/superAdmin/',
          '/basicAdmin/',
        ]
      },

    ]
  }
}
