import { createRouter, createWebHistory } from 'vue-router'
const routes = [{
  path: '/',
  name: 'home',
  redirect: '/line'
}, {
  path: '/line',
  component: () => import('@/views/basic/Line.vue')
}, {
  path: '/bar',
  component: () => import('@/views/basic/Bar.vue')
}, {
  path:'/pie',
  component:() => import('@/views/basic/Pie.vue')
},{
  path:'/scatter',
  component:() => import('@/views/basic/Scatter.vue')
},{
  path:'/buble',
  component:() => import('@/views/basic/Buble.vue')
},{
  path:'/radar',
  component:() => import('@/views/basic/Radar.vue')
},{
  path:'/funnel',
  component:() => import('@/views/basic/Funnel.vue')
},{
  path:'/gauge',
  component:() => import('@/views/basic/Gauge.vue')
},{
  path:'/boxplot',
  component:() => import('@/views/basic/Boxplot.vue')
},{
  path:'/heatmap',
  component:() => import('@/views/basic/Heatmap.vue')
},{
  path:'/sunburst',
  component:() => import('@/views/basic/Sunburst.vue')
},{
  path:'/sankey',
  component:() => import('@/views/basic/Sankey.vue')
},{
  path:'/wordcloud',
  component:() => import('@/views/basic/Wordcloud.vue')
},{
  path:'/tree',
  component:() => import('@/views/basic/Tree.vue')
},{
  path:'/treemap',
  component:() => import('@/views/basic/Treemap.vue')
},{
  path:'/graph',
  component:() => import('@/views/basic/Graph.vue')
},{
  path:'/calendar',
  component:() => import('@/views/basic/Calendar.vue')
},{
  path:'/map',
  component:() => import('@/views/basic/Map.vue')
},{
  path:'/geo',
  component:() => import('@/views/basic/Geo.vue')
},
{
  path:'/timeline',
  component:() => import('@/views/complex/Timeline.vue')
},{
  path:'/elecDashboard',
  component:() => import('@/views/ElecSale.vue')
},{
  path:'/carsSale',
  component:() => import('@/views/CarsSale.vue')
}];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
