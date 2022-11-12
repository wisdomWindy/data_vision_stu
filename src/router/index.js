import { createRouter, createWebHistory } from 'vue-router'
const routes = [{
  path: '/',
  name: 'home',
  redirect: '/line'
}, {
  path: '/line',
  component: () => import('@/components/basic/Line.vue')
}, {
  path: '/bar',
  component: () => import('@/components/basic/Bar.vue')
}, {
  path:'/pie',
  component:() => import('@/components/basic/Pie.vue')
},{
  path:'/scatter',
  component:() => import('@/components/basic/Scatter.vue')
},{
  path:'/buble',
  component:() => import('@/components/basic/Buble.vue')
},{
  path:'/radar',
  component:() => import('@/components/basic/Radar.vue')
},{
  path:'/funnel',
  component:() => import('@/components/basic/Funnel.vue')
},{
  path:'/gauge',
  component:() => import('@/components/basic/Gauge.vue')
},{
  path: '/complex',
  name: 'complex',
  component: () => import('@/views/Complex.vue')
}];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
