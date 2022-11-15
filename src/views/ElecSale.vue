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
      x:'14.7',
      y:'18%'
      }, {
        text: '34220',
        x: '15',
        y: '18%'
      }, {
        text: '订单成功占比',
        x: '20',
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
        x: '76',
        y: '23%'
      },{
        text:'购买用户设备分布',
        x:'19.8%',
        y:'45%'
      },{
        text:'购买用户年龄分布',
        x:'49.8%',
        y:'45%'
      },{
        text:'购买用户渠道分布',
        x:'79.8%',
        y:'45%'
      },{
        text:'4509834',
        x:'center',
        y:'9%'
      },{
        text:'订单量TOP10城市',
        x:'18%',
        y:'60%'
      },{
        text:'订单量分时段统计',
        x:'65%',
        y:'60%'
      }],
      grid:[{
        left:'5%',
        right:'55%',
        top:'65%',
        bottom:'5%',
        containLabel:true
      },{
        gridIndex:1,
        left:'50%',
        right:'5%',
        top:'65%',
        bottom:'5%',
        containLabel:true
      }],
      xAxis:[{
        type:'value',
      },{
        gridIndex:1,
        type:'category',
        data:['0:00']
      }],
      yAxis:[{
        type:'category',
        data:['城市A']
      },{
        gridIndex:1,
        type:'value'
      }],
      series:[{
        type:'bar',
        data:[]
      },{
        type:'pie',
        center:['20%', '45%'],
        radius:['15%', '20%'],
        data:[]
      },{
        type:'pie',
        center:['50%', '45%'],
        radius:['15%', '20%'],
        data:[]
      },{
        type:'pie',
        center:['80%', '45%'],
        radius:['15%', '20%'],
        data:[]
      },{
        type:'line',
        xAxisIndex:1,
        yAxisIndex:1,
        data:[],
        smooth:true
      }]
  }
  echartsInstance.setOption(option);
});
</script>

<style scoped>
 
</style>