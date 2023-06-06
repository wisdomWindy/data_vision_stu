<template>
  <div class="scatter" ref="container">

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';

const container = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(container.value);
  const option = {
    legend: {
      data: ['A产品', 'B产品']
    },
    xAxis: {},
    yAxis: {},
    series: [{
      type: 'scatter',
      name: 'A产品',
      data: [[10, 20], [20, 10]]
    }, {
      type: 'scatter',
      name: 'B产品',
      data: [[20, 30], [23, 26]]
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
.scatter
{
  height: 100%;
}
</style>