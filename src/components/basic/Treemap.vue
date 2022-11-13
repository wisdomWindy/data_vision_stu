<template>
 <div class="treemap" ref="treemap"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';
const treemap = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(treemap.value);
  const option = {
    tooltip: {},
    legend: {
      data: [{
        name: 'tree1',
        icon: 'rectangle'
      }]
    },
    series: [{
      type: 'treemap',
      name: 'tree1',
      data: [{
        name: 'A',
        children: [{
          name: 'A1',
          value: 20
        }, {
          name: 'A2',
          value: 40
        }]
      }]
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
 .treemap{
  height: 95%;
 }
</style>