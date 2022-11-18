<template>
  <div class="wordcloud" ref="wordcloud"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';
const wordcloud = ref(null);
const data = [{
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
  }];
  const data2=[10,20,30];
  const maxValue = data.sort((a,b) => {
    return a-b;
  })[0];
onMounted(() => {
  const echartsInstance = useEchartsInstance(wordcloud.value);
  const option = {
    xAxis:{
      show:false
    },
    yAxis:{
      show:false
    },
    series: [{
      type: 'custom',
      renderItem(params, api){
        const dataItem = data[params.dataIndex];
        const style = api.style();
        return {
          type:'text',
          x:Math.random() * 700,
          y: Math.random() * 800,
          rotation:Math.floor(Math.random() * 90),
          style:{
            text: dataItem.name,
            fontSize:dataItem.value / maxValue * 100,
            color:style.color
          }
        }
      },
      data: data
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