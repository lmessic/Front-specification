export const themeData = JSON.parse(
  '{"logo":"https://vuejs.org/images/logo.png","repo":"https://github.com/lmessic/Front-specification/tree/dev","editLink":false,"navbar":[{"text":"首页","link":"/"},{"text":"lmessic的博客","link":"https://www.lmessic.com"}],"sidebar":[{"text":"欢迎学习","link":"/","collapsible":false,"children":[{"text":"学前必读","link":"/"}]},{"text":"基础学习","link":"handbook/FilesDirectory","collapsible":false,"children":[{"text":"文件目录","link":"/handbook/FilesDirectory"},{"text":"文件命名","link":"/handbook/FilesName"}]}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There\'s nothing here.","How did we get here?","That\'s a Four-Oh-Four.","Looks like we\'ve got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}'
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
