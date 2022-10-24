<template>
  <main>
    <h1 class="green">首页</h1>
    <RouterLink to="/about">关于</RouterLink>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { testApi } from '@/api/home'

testApi().then((res) => console.log(res))
</script>

<style scoped>
h1 {
  font-size: 32px;
}
</style>
