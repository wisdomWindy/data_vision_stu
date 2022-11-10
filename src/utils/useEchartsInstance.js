import * as echarts from 'echarts'
function useEchartsInstance(el) {
  console.log(el)
  const echartsInstance = echarts.init(el);
  return echartsInstance;
}

export {
  echarts,
  useEchartsInstance
} 

