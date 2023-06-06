<template>
 <div class="sunburst" ref="sunburst"></div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {echarts, useEchartsInstance} from '@/utils/useEchartsInstance';
const sunburst = ref(null);
function createData(){
  let data = [];
  for(let i = 0; i < 3; i++){
    data[i] = {
      name:'产品'+i,
      value: Math.floor(Math.random() * 101),
      children:[]
    }
    for(let j = 0; j < 2; j++){
      data[i].children.push({
        name:data[i].name+j,
        value: Math.floor(Math.random() * 101)
      });
    }
  }
  console.log(data)
  return data;
}
onMounted(() => {
  const echartsInstance = useEchartsInstance(sunburst.value);
  const option = {
    tooltip:{},
    series:[{
      type:"sunburst",
      data:createData(),
      radius:[0, '90%'],
      label:{
        showL:true,
        rotate:'radial'
      }
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
 .sunburst{
  height: 100%;
 }
</style>