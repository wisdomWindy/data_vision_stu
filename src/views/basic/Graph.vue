<template>
  <div class="graph" ref="graph"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';
const graph = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(graph.value);
  const option = {
    tooltip: {},
    label:{
      show:true
    },
    legend: {
      data: ['男性', '女性']
    },
    series: [{
      type: 'graph',
      layout:'force',
      categories: [{
        name: '男性'
      }, {
        name: '女性'
      }],
      roam:true,
      data: [{
        name: 'A',
        category: 0,
        value:'丈夫'
      }, {
        name: 'B',
        category: 1,
        value:'妻子'
      }],
      links:[{
        source:0,
        target:1,
        value:'夫妻'
      }],
      lineStyle:{
        opacity: 0.9,
        width: 3,
        curveness: 0
      }
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
.graph{
  height: 95%;
  width: 95%;
}
</style>