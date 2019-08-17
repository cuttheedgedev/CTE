export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\Index.vue")
  },
  {
    path: "/search",
    component: () => import(/* webpackChunkName: "page--src-pages-search-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\Search.vue")
  },
  {
    path: "/Search/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\Projects\\CTE\\Live\\src\\templates\\Post.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\Projects\\CTE\\Live\\.cache\\data\\route-meta\\0.json")
    }
  },
  {
    path: "/tags/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-tags-vue" */ "D:\\Projects\\CTE\\Live\\src\\templates\\Tags.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src-templates-tags-vue" */ "D:\\Projects\\CTE\\Live\\.cache\\data\\route-meta\\1.json")
    }
  },
  {
    path: "/types/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-types-vue" */ "D:\\Projects\\CTE\\Live\\src\\templates\\Types.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src-templates-types-vue" */ "D:\\Projects\\CTE\\Live\\.cache\\data\\route-meta\\2.json")
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\Projects\\CTE\\Live\\src\\pages\\404.vue")
  }
]

