<template>
  <div>
    <b-modal id="modal-center" centered>teste</b-modal>
  </div>
</template>

<script>
export default {
  props:["order"],
  data(){
    return{
      localOrder: ''
    }
  },
  created(){
    this.localOrder = this.order
  }
}
</script>

<style>

</style> 