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
    },{
      name:'箱线图',
      path:'/boxplot'
    },{
      name:'热力图',
      path:'/heatmap'
    },{
      name:'旭日图',
      path:'/sunburst'
    },{
      name:'桑基图',
      path:'/sankey'
    },{
      name:'词云图',
      path:'/wordcloud'
    },{
      name:'树图',
      path:'/tree'
    },{
      name:'矩形树图',
      path:'/treemap'
    },{
      name:'关系图',
      path:'/graph'
    }]
  },{
    name:'复合图表',
    path:'/complex'
  }]);
  return { menuList }
})
