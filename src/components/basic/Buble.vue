<template>
  <div class="buble" ref="buble"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';

const buble = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(buble.value);
  const option = {
    xAxis: {},
    yAxis: {},
    legend: {
      data: ['A产品', 'B产品']
    },
    series: [{
      name: 'A产品',
      type: 'scatter',
      data: [[20, 10, 12], [25, 12, 23]],
      symbolSize: function (data) {
        return data[2];
      }
    }, {
      name: 'B产品',
      type: 'scatter',
      data: [[24, 13, 19], [22, 15, 33]],
      symbolSize: function (data) {
        return data[2];
      }
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
.buble
{
  height: 100%;
}
</style>