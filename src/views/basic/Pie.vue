<template>
  <div class="pie" ref="pie"></div>
</template>

<script setup>
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance'
import { onMounted, ref } from 'vue';

let pie = ref(null);
onMounted(() => {
  let echartsInstance = useEchartsInstance(pie.value);
  let option = {
    tooltip: {
    },
    legend: {
      data: ['A产品', 'B产品', 'C产品', 'D产品']
    },
    series: [{
      type: 'pie',
      radius:['50%', '70%'],
      data: [{
        name: 'A产品',
        value: 100
      }, {
        name: 'B产品',
        value: 150
      }, {
        name: 'C产品',
        value: 170
      }, {
        name: 'D产品',
        value: 130
      }]
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
.pie{
  width: 100%;
  height: 100%;
}
</style>