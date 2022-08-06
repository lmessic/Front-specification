export const data = JSON.parse(
  '{"key":"v-4c42f3e0","path":"/handbook/Files.html","title":"文件目录","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"handbook/Files.md"}'
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
