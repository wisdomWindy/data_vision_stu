<template>
  <div class="sankey" ref="sankey"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';
const sankey = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(sankey.value);
  const option = {
    tooltip:{},
    series: [{
      type: 'sankey',
      data: [{
        name: '输入1'
      }, {
        name: '输入2'
      }, {
        name: '输出1'
      }, {
        name: '输出2'
      }],
      links: [{
        source: '输入1',
        target: '输出2',
        value: 10
      }, {
        source: '输入2',
        target: '输出1',
        value: 30
      }],
      label:{
        show:true
      }
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
.sankey
{
  height: 100%;
}
</style>