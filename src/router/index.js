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
  path:'/boxplot',
  component:() => import('@/components/basic/Boxplot.vue')
},{
  path:'/heatmap',
  component:() => import('@/components/basic/Heatmap.vue')
},{
  path:'/sunburst',
  component:() => import('@/components/basic/Sunburst.vue')
},{
  path:'/sankey',
  component:() => import('@/components/basic/Sankey.vue')
},{
  path:'/wordcloud',
  component:() => import('@/components/basic/Wordcloud.vue')
},{
  path:'/tree',
  component:() => import('@/components/basic/Tree.vue')
},{
  path:'/treemap',
  component:() => import('@/components/basic/Treemap.vue')
},{
  path:'/graph',
  component:() => import('@/components/basic/Graph.vue')
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
