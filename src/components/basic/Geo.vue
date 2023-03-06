<template>
 <div class="geo" ref="geo"></div>
</template>

<script setup>
import chinaMap from '../../assets/map/china.json';
import { ref, onMounted } from 'vue';
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance';
function createData() {
  return chinaMap.features.map(item => {
    return {
      name: item.properties.shortName,
      value: Math.floor(Math.random() * 361)
    }
  });
}
const geo = ref(null);
onMounted(() => {
  echarts.registerMap('china', chinaMap);
  const echartsInstance = useEchartsInstance(geo.value);
  const option = {
    geo:{
      map:'china',
      nameProperty:'shortName'
    },
    visualMap: {
      type: 'piecewise',
      pieces: [{
        min: 0,
        max: 100,
        color: '#10ff10'
      }, {
        min: 101,
        max: 190,
        color: '#eeffaa'
      }, {
        min: 191,
        max: 360,
        color: '#eeffff'
      }]
    },
    series: [{
      type: 'map',
      show:false,
      map: 'china',
      nameProperty: 'shortName',
      name: 'shortName',
      data: createData()
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
 .geo{
  width: 100%;
  height: 100%;
 }
</style>