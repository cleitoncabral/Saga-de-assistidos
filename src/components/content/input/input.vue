<template>
  <section class="p-4" align-h="center" >
    <b-form-group class="input">
      <label for="" class="ml-3">O que já assisti?</label>
      <div class="col-12 form-inline">
      <b-form-input placeholder="Procurar conteúdo" style="width:70%; outline:none"></b-form-input>
        <b-button style="background-color:green" class="ml-3" type="submit"><fa-icon :icon="['fas', 'arrow-right']" size="1x"  ></fa-icon></b-button>
      </div>
    </b-form-group>
  </section>
</template>

<script>
export default {
components:{
  
}
}
</script>

<style>
.input{
  padding-left: 20%;
}
</style>