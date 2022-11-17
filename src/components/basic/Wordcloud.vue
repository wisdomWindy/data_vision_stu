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
  const data2=[10,20,30]
onMounted(() => {
  const echartsInstance = useEchartsInstance(wordcloud.value);
  const option = {
    xAxis:{
      // type:'category',
      // data:['0:00',"1:00",'2:00']
      show:false
    },
    yAxis:{
      // type:"value"
      show:false
    },
    series: [{
      type: 'custom',
      renderItem(params, api){
        var values = [api.value(0), api.value(1)];
        var coord = api.coord(values);
        var size = api.size([1, 1], values);
        return {
          type:'text',
          x:Math.random() * 700,
          y: Math.random() * 800,
          style:{
            text: data[params.dataIndex].name,
            fontSize:data[params.dataIndex].value
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