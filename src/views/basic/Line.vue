<template>
 <div class="line" ref="container">
  <!-- <div class="line_container" ></div> -->
 </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {echarts, useEchartsInstance} from '@/utils/useEchartsInstance'
const container = ref(null);
function createXAxis(){
  let data = [];
  for(let i = 0; i<7; i++){
    data.push('周'+(i+1));
  }
  return data;
}
onMounted(() => {
  const echartsInstance = useEchartsInstance(container.value);
  let xAxis = createXAxis();
  const options = {
    title:{
      text:'折线图',
      left:'center'
    },
    tooltip:{
      trigger:'axis',
      axisPointer:{
        type:'cross',
        label:{
          backgroundColor:'#6a7985'
        }
      }
    },
    legend:{
      data:['心情指数'],
      left:'right'
    },
    xAxis:{
      type:'category',
      data:xAxis
    },
    yAxis:{
      type:'value'
    },
    series:[{
      type:'line',
      name:'心情指数',
      data:[10,40,90,50,46,80,78],
      smooth:true,
      areaStyle:{}
    }]
  }
  echartsInstance.setOption(options, {
    width:'100%'
  });
});
</script>

<style scoped>
 .line{
  width:100%;
  height: 100%;
 }
</style>