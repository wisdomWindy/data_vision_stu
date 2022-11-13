<script setup>
import {useMainStore} from '@/stores/counter.js'
const mainStore = useMainStore();
const menuList = mainStore.menuList;
</script>

<template>
  <el-container class="container">
    <el-aside class="aside">
      <el-menu :router="true" class="menu">
        <el-sub-menu v-for="(menu) in menuList" :key="menu" :index="menu.name">
          <template v-slot:title>{{menu.name}}</template>
          <el-menu-item class="menuItem" v-for="(menuItem) in menu.children" :key="menuItem" :index="menuItem.path">{{menuItem.name}}</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped>
.container{
  padding:0;
}
.menuItem{
 padding-left:0;
 text-align: center;
}
.aside{
  width:190px;
  height: 100%;
}
</style>
<style>
.el-sub-menu .el-menu-item{
  min-width: auto !important;
}
</style>