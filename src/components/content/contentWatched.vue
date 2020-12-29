<template>
<div>
   <div v-for="content in contentWatched" :key="content.id">
    <a href="">{{content.coment}}</a>
  </div>
</div>
</template>

<script>
export default {
  computed:{
    contentWatched(){
      return this.$store.state.contentWatched
    }
  }
}
</script>

<style>

</style>