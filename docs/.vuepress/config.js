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
        title: 'Super Admin',
        collapsable: false,
        children: [
          // '/guide/',
          '/Admin-1/',
          '/Admin-1.1/',
          '/Admin-1.2/'

        ]
      },

    ]
  }
}
