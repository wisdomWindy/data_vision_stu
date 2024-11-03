import { defineStore } from "pinia"
export default defineStore('lineStore',{
  state(){
    return {
      normalData:{
        xAxisData:[],
        yAxisData:[]
      }
    }
  },

})