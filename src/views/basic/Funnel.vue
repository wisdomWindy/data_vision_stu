<template>
 <div class="funnel" ref="funnel"></div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {echarts, useEchartsInstance} from '@/utils/useEchartsInstance';
const funnel = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(funnel.value);
  const option = {
    legend:{
      data:['登录', '注册']
    },
    series:[{
      type:'funnel',
      name:'漏斗图',
      min:0,
      max:100,
      minSize:'0%',
      maxSize:'100%',
      data:[{
        name:'登录',
        value:30
      }, {
          name: '注册',
          value: 50
        }]
    }]
  };
  echartsInstance.setOption(option);
})
</script>

<style scoped>
.funnel{
  height: 100%;
 }
</style>