export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/tonyle/my-first-wp-project/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/tonyle/my-first-wp-project/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/tonyle/my-first-wp-project/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/:year/:month/:day/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Users/tonyle/my-first-wp-project/src/templates/WordPressPost.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/category/:slug/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Users/tonyle/my-first-wp-project/src/templates/WordPressCategory.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/tag/:slug/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-post-tag-vue" */ "/Users/tonyle/my-first-wp-project/src/templates/WordPressPostTag.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/tonyle/my-first-wp-project/node_modules/gridsome/app/pages/404.vue")
  }
]

