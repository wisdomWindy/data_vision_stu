import * as echarts from 'echarts';
import { onMounted,ref } from 'vue';
export default function useEcharts(options){
  const container = ref(null);
  const chart = ref(null)
  onMounted(()=>{
    chart.value = echarts.init(container.value);
    chart.value.setOption(options);
  })
  return {
    container,
    chart
  }
}
export {echarts}