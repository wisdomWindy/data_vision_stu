<template>
 <div class="radar" ref="radar"></div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import {echarts, useEchartsInstance} from '@/utils/useEchartsInstance';

const radar = ref(null);
onMounted(() => {
  const echartsInstance = useEchartsInstance(radar.value);
  const option = {
    legend:{
      data:['员工1', '员工2']
    },
    radar:{
      indicator:[{
        name:'sk1',
        max:1000
      }, {
          name: 'sk2',
          max: 1000
        }, {
          name: 'sk3',
          max: 1000
        }, {
          name: 'sk4',
          max: 1000
        }, {
          name: 'sk5',
          max: 1000
        }]
    },
    series:[{
      type:'radar',
      data:[{
        name: '员工1',
        value: [200, 100, 430, 540, 340]
      },{
        name: '员工2',
        value: [100, 150, 330, 840, 240]
      }]
    }]
  };
  echartsInstance.setOption(option);
})
</script>

<style scoped>
 .radar{
  height: 100%;
 }
</style>