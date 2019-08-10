export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\Projects\\CTE\\CTE\\src\\pages\\About.vue")
  },
  {
    path: "/search",
    component: () => import(/* webpackChunkName: "page--src-pages-search-vue" */ "D:\\Projects\\CTE\\CTE\\src\\pages\\Search.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\Projects\\CTE\\CTE\\src\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Projects\\CTE\\CTE\\src\\pages\\Index.vue")
  },
  {
    path: "/tags/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-tags-vue" */ "D:\\Projects\\CTE\\CTE\\src\\templates\\Tags.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src-templates-tags-vue" */ "D:\\Projects\\CTE\\CTE\\.cache\\data\\route-meta\\0.json")
    }
  },
  {
    path: "/Search/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\Projects\\CTE\\CTE\\src\\templates\\Post.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\Projects\\CTE\\CTE\\.cache\\data\\route-meta\\1.json")
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\Projects\\CTE\\CTE\\src\\pages\\404.vue")
  }
]

