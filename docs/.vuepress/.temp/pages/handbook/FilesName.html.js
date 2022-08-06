export const data = JSON.parse(
  '{"key":"v-13bec6d6","path":"/handbook/FilesName.html","title":"文件命名","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"handbook/FilesName.md"}'
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
