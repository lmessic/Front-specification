export const data = JSON.parse(
  '{"key":"v-7874af85","path":"/handbook/FilesDirectory.html","title":"文件目录","lang":"zh-CN","frontmatter":{"title":"文件目录","author":"lmessic","date":"2022-08-06"},"excerpt":"","headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"handbook/FilesDirectory.md"}'
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
