module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  title: 'DCBR Documentation',
  description: '2019',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },

    ],
    sidebar: [


      {
        title: 'Super Admin',
        collapsable: true,
        children: [
          // '/guide/',
          '/Admin-1/',
          '/Admin-1.1/',
          '/Admin-1.2/',
          '/Admin-1.3/',
          '/Admin-1.4/',
          '/Admin-1.5/',
          '/Admin-1.6/',
          '/Admin-1.7/',
          '/Admin-1.8/',
          '/Admin-1.9/',
          '/Admin-2.0/',
          '/Admin-2.1/',
          '/Admin-2.2/',
          '/Admin-2.3/',
          '/Admin-2.4/',
          '/Admin-2.5/',
          '/Admin-2.6/',
          '/Admin-2.7/',
        ]
      },

      {
        title: 'Admin',
        collapsable: true,
        children: [
          // '/guide/',
          '/Admin-1/',

        ]
      },
      {
        title: 'Inspector',
        collapsable: true,
        children: [
          // '/guide/',
          '/Inspector-1/',
          '/Inspector-2/',
          '/Inspector-3/',

        ]
      },
    ]
  }
}
