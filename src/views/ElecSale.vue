<template>
 <div class="elecsale" ref="elecsale"></div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {echarts, useEchartsInstance} from '@/utils/useEchartsInstance';

const elecsale = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(elecsale.value);
  const option = {
    title:[{
      text:'今日订单总销量',
      x:'center',
      y:'4.5%'
    },{
      text:'4509834',
      x:'center',
      y:'10%',
      FontSize:20
    },{
      text:'今日成交订单数',
      x:'20',
      y:'18%'
      }, {
        text: '34220',
        x: '25',
        y: '18%'
      }, {
        text: '订单成功占比',
        x: '40',
        y: '18%'
      }, {
        text: '93.25%',
        x: '21',
        y: '18%'
      }, {
        text: '今日取消订单数',
        x: '25',
        y: '18%'
      }, {
        text: '2310',
        x: '26',
        y: '18%'
      },{
        text:''
      }]
  }
  echartsInstance.setOption(option);
});
</script>

<style scoped>
.elecsale{
  height: 100%;
}
</style>