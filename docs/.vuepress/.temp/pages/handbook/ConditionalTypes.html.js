export const data = JSON.parse(
  '{"key":"v-f0e24570","path":"/handbook/ConditionalTypes.html","title":"文件目录","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"handbook/ConditionalTypes.md"}'
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
