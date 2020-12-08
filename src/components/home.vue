<template>
  <div class="app">
  <Header />
  <router-view></router-view>
  </div>
</template>

<script>
import Header from './header/header.vue'

export default {
components:{
Header
}
}
</script>

<style>


</style>