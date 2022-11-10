<script setup>
import {useMainStore} from '@/stores/counter.js'
const mainStore = useMainStore();
const menuList = mainStore.menuList;
</script>

<template>
  <el-container class="container">
    <el-aside class="aside">
      <el-menu :router="true">
        <el-sub-menu v-for="(menu) in menuList" :key="menu" :index="menu.name">
          <template v-slot:title>{{menu.name}}</template>
          <el-menu-item v-for="(menuItem) in menu.children" :key="menuItem" :index="menuItem.path">{{menuItem.name}}</el-menu-item>
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
  padding:15px;
}
.aside{
  width: 190px;
}
</style>
