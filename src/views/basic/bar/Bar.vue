<template>
  <div class="container">
    <HorizontalBar />
    <VerticalBar />
    <StackBar />
  </div>
</template>

<script setup>
import HorizontalBar from './components/HorizontalBar.vue';
import VerticalBar from './components/VerticalBar.vue';
import StackBar from './components/StackBar.vue'

</script>

<style scoped>
.bar
{
  width: 100%;
  height: 100%;
}
</style>