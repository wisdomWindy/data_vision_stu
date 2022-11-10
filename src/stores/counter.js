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
    }]
  },{
    name:'复合图表',
    path:'/complex'
  }]);
  return { menuList }
})
