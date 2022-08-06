import { defineAsyncComponent } from 'vue'

export const pagesComponents = {
  // path: /
  'v-8daa1a0e': defineAsyncComponent(() =>
    import(
      /* webpackChunkName: "v-8daa1a0e" */ 'D:/app/Front-specification/docs/.vuepress/.temp/pages/index.html.vue'
    )
  ),
  // path: /handbook/FilesDirectory.html
  'v-7874af85': defineAsyncComponent(() =>
    import(
      /* webpackChunkName: "v-7874af85" */ 'D:/app/Front-specification/docs/.vuepress/.temp/pages/handbook/FilesDirectory.html.vue'
    )
  ),
  // path: /handbook/FilesName.html
  'v-13bec6d6': defineAsyncComponent(() =>
    import(
      /* webpackChunkName: "v-13bec6d6" */ 'D:/app/Front-specification/docs/.vuepress/.temp/pages/handbook/FilesName.html.vue'
    )
  ),
  // path: /404.html
  'v-3706649a': defineAsyncComponent(() =>
    import(
      /* webpackChunkName: "v-3706649a" */ 'D:/app/Front-specification/docs/.vuepress/.temp/pages/404.html.vue'
    )
  )
}
