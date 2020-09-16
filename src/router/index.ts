import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '',
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/form",
        name: 'form表单',
        component: () => import("../views/form/index.vue"),
        children: [
          {
            path: "formInline",
            name: '行内表单',
            component: () => import("../views/form/inline.vue"),
          },
          {
            path: "formValidator",
            name: '带校验的表单',
            component: () => import("../views/form/formValidator.vue"),
          }
        ]
      },
      {
        path:"/table1",
        name: 'table组件一',
        component: () => import("../views/table/table1.vue"),
      },
      {
        path:"/table2",
        name: 'table组件二',
        component: () => import("../views/table/table2.vue"),
      }
    ]
  },
  {
    path:"/login",
    name:"登录",
    component: () => import("../views/login/index.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
