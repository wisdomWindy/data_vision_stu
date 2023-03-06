<template>
  <div class="boxplot" ref="boxplot"></div>
</template> 

<script setup>
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';

const boxplot = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(boxplot.value);
  const option = {
    tooltip:{},
    xAxis: {
      type: 'category',
      data: ['实验0', '实验1']
    },
    yAxis: {
      type: 'value',
      splitArea:{
        show:true
      }
    },
    series: [{
      type: 'boxplot',
      data: [[100, 209, 120, 230, 340, 240], [100, 209, 120, 230, 340, 240]]
    }]
  };
  echartsInstance.setOption(option);
})
</script>

<style scoped>
.boxplot
{
  height: 100%;
}
</style>