<template>
  <div class="tree" ref="tree"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';
const tree = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(tree.value);
  const option = {
    tooltip:{},
    legend: {
      data: [{
        name: 'tree1',
        icon: 'rectangle'
      }]
    },
    series: [{
      type: 'tree',
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
.tree
{
  height: 100%;
}
</style>