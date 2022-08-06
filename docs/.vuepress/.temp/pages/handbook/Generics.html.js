export const data = JSON.parse(
  '{"key":"v-28563602","path":"/handbook/Generics.html","title":"泛型","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"handbook/Generics.md"}'
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
