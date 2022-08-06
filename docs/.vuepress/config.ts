import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， Lmessic ！',
  base: '/',
  description: '这是我的第一个 VuePress 站点',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/lmessic/Front-specification/tree/dev',
    editLink: false, // 关闭“编辑此页”
    navbar: [
      { text: '首页', link: '/' },
      { text: 'lmessic的博客', link: 'https://www.lmessic.com' }
    ],
    sidebar: [
      {
        text: '欢迎学习',
        link: '/',
        collapsible: false,
        children: [{ text: '学前必读', link: '/' }]
      },
      {
        text: '基础学习',
        link: 'handbook/FilesDirectory',
        collapsible: false,
        children: [
          { text: '文件目录', link: '/handbook/FilesDirectory' },
          { text: '文件命名', link: '/handbook/FilesName' }
        ]
      }
    ]
  })
})
