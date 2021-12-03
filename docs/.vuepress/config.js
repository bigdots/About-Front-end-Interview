module.exports = {
  lang: 'zh-CN',
  title: 'About Frontend',
  // head: [ // 注入到当前页面的 HTML <head> 中的标签
  //   ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  // base:,// 这是部署到github相关的配置
  description: '这是我的第一个 VuePress 站点',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'vuejs/vuepress',
    searchMaxSuggestions: 10,
    sidebar: [
      {
        text: 'javascript',
        link: '/javascript/',
      },
      {
        text: '算法',
        link: '/algorithm/',
      },
      {
        text: '网络',
        link: '/http/',
      },
      {
        text: 'CSS',
        link: '/css/',
      }
    ],
  },
}