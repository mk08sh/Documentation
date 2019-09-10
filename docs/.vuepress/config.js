module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },

    ],
    sidebar: [
      {
        title: 'Super Admin',   // required
        path: '/foo/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/guide/',
          '/installation/',
          '/advanced/',
        ]
      },
      {
        title: 'Super Admin',   // required
        path: '/foo/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/guide/',
          '/installation/',
          '/advanced/',
        ]
      },
      {
        title: 'Admin',
        children: [
          '/installation/',
          '/advanced/',
          '/guide/',
        ]
      }
    ]
  }
}
