import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  let menuList = ref([{
    name:'基础图表',
    children:[{
      name:'折线图',
      path:'/line'
    },{
      name:'柱状图',
      path:'/bar'
    },{
      name:'饼图',
      path:'/pie'
    },{
      name:'散点图',
      path:'/scatter'
    },{
      name:'气泡图',
      path:'/buble'
    },{
      name:'雷达图',
      path:'/radar'
    },{
      name:'漏斗图',
      path:'/funnel'
    },{
      name:'仪表盘',
      path:'/gauge'
    }]
  },{
    name:'复合图表',
    path:'/complex'
  }]);
  return { menuList }
})
