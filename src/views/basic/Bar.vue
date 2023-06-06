<template>
  <div class="bar" ref="verticalBar"></div>
  <div class="bar" ref="horizontalBar"></div>
  <div class="bar" ref="stackBar"></div>
</template>

<script setup>
import { ref, onMounted, createApp } from 'vue'
import { echarts, useEchartsInstance } from '@/utils/useEchartsInstance'
let verticalBar = ref(null);
function createXAxis() {
  let data = [];
  for (let i = 0; i < 7; i++) {
    data.push('周' + (i + 1));
  }
  return data;
}
onMounted(() => {
  const echartsInstance = useEchartsInstance(verticalBar.value);
  const option = {
    title: {
      text: '基础柱状图',
      left: 'center'
    },
    legend: {
      data: ['温度'],
      left: '60%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#659e86'
        }
      }
    },
    xAxis: {
      type: 'category',
      data: createXAxis()
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      type: 'bar',
      name: '温度',
      data: [19, 24, 23, 25, 20, 19, 25],
      label: {
        show: true,
        position: 'top'
      }
    }]
  };
  echartsInstance.setOption(option);
});

let horizontalBar = ref(null);
onMounted(() => {
  let echartsInstance = useEchartsInstance(horizontalBar.value);
  const horizontalBarOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#ff54de'
        }
      }
    },
    legend: {
      data: ['A产品', 'B产品', 'C产品', 'D产品', 'E产品']
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['A商场', 'B商场', 'C商场', 'D商场', 'E商场']
    },
    series: [{
      type: 'bar',
      name: 'A产品',
      data: [20, 100, 125, 43, 65],
      label: {
        show: true,
        position: "right"
      }
    }, {
      type: 'bar',
      name: 'B产品',
      data: [20, 170, 127, 43, 69],
      label: {
        show: true,
        position: "right"
      }
    }, {
      type: 'bar',
      name: 'C产品',
      data: [60, 120, 135, 83, 165],
      label: {
        show: true,
        position: "right"
      }
    }, {
      type: 'bar',
      name: 'D产品',
      data: [50, 130, 165, 53, 235],
      label: {
        show: true,
        position: "right"
      }
    }, {
      type: 'bar',
      name: 'E产品',
      data: [30, 190, 185, 33, 75],
      label: {
        show: true,
        position: "right"
      }
    }]
  };
  echartsInstance.setOption(horizontalBarOption);
});
let stackBar = ref(null);
onMounted(() => {
  let echartsInstance = useEchartsInstance(stackBar.value);
  const option = {
    tooltip: {
      type: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#feed3e'
        }
      }
    },
    legend: {
      data: ['A产品', 'B产品', 'C产品', 'D产品', 'E产品']
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['A商场', 'B商场', 'C商场', 'D商场', 'E商场']
    },
    series: [{
      type: 'bar',
      name: 'A产品',
      data: [200, 300, 430, 230, 530],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }, {
      type: 'bar',
      name: 'B产品',
      data: [200, 340, 650, 340, 230],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }, {
      type: 'bar',
      name: 'C产品',
      data: [100, 200, 230, 760, 32],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }, {
      type: 'bar',
      name: 'D产品',
      data: [102, 390, 120, 230, 354],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }, {
      type: 'bar',
      name: 'E产品',
      data: [150, 230, 540, 120, 323],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }]
  };
  echartsInstance.setOption(option);
});
</script>

<style scoped>
.bar
{
  width: 100%;
  height: 100%;
}
</style>