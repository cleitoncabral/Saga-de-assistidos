<template>
  <section class="p-4" align-h="center" >
    <b-form-group class="input">
      <label for="" class="ml-3">O que já assisti?</label>
      <div class="col-12 form-inline">
      <b-form-input v-model="search" placeholder="Procurar conteúdo" style="width:70%; outline:none"></b-form-input>
        <b-button style="background-color:green" class="ml-3" type="submit" @click.enter="searchContent"><fa-icon :icon="['fas', 'arrow-right']" size="1x"  ></fa-icon></b-button>
      </div>
    </b-form-group>
  </section>
</template>

<script>
import Axios from 'axios'
export default {
components:{
},
  data(){
    return{
      search:'', 
      results:''
    }
  },
  methods:{
    searchContent(){
    const apiKey = 'c588fadd20c0db71341bc6404a868279'
    // var contentJson
      Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-br&query=${this.search}&page=1&include_adult=false`
      ).then( resp =>{
        this.results = resp.data.results
        this.$emit('apiContent', this.results )
      })
      
    }
  }
}

</script>

<style>
.input{
  padding-left: 20%;
}
</style>