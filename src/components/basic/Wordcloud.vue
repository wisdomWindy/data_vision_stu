<template>
  <div class="wordcloud" ref="wordcloud"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';
const wordcloud = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(wordcloud.value);
  const option = {
    series: [{
      type: 'wordCloud',
      gridSize: 6,
      shape: 'circle',
      data: [{
        name: 'hellp',
        value: 10
      }, {
        name: '没有',
        value: 20
      }, {
        name: '不错',
        value: 16
      }, {
        name: '还行',
        value: 30
      }, {
        name: '屏幕',
        value: 40
      }]
    }]
  };
  echartsInstance.setOption(option);
})
</script>

<style scoped>
.wordcloud
{
  height: 100%;
}
</style>