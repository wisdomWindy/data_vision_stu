<template>
  <div class="gauge" ref="gauge">

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';
const gauge = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(gauge.value);
  const option = {
    series: [{
      name: '完成率',
      type: 'gauge',
      data: [{
        value: 76,
        name: '完成率'
      }]
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
.gauge
{
  height: 100%;
}
</style>