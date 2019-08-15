export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\Index.vue")
  },
  {
    path: "/test",
    component: () => import(/* webpackChunkName: "page--src-pages-test-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\test.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\404.vue")
  },
  {
    path: "/search",
    component: () => import(/* webpackChunkName: "page--src-pages-search-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\Search.vue")
  },
  {
    path: "/Search/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\Projects\\CTE\\Live\\src\\templates\\Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/tags/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-tags-vue" */ "D:\\Projects\\CTE\\Live\\src\\templates\\Tags.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/types/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-types-vue" */ "D:\\Projects\\CTE\\Live\\src\\templates\\Types.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\404.vue")
  }
]

