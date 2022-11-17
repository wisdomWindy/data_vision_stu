import * as echarts from 'echarts'
function useEchartsInstance(el) {
  const echartsInstance = echarts.init(el);
  return echartsInstance;
}

export {
  echarts,
  useEchartsInstance
} 

