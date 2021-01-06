<template>
  <div class="container">
    <div class="cards">
      <div v-for="content in contentWatched" :key="content.id">
        <div class="card mb-3">
          <div class="row">
            <div class="col-md-1 pt-2 pl-4 pb-1">
              <img 
              :src="'http://image.tmdb.org/t/p/w500/' + content.image" 
              class="card-img" 
              alt="Image">
              <b-form-rating
              size="sm"
              no-border
              id="rating-inline"
              :value= content.rate
            ></b-form-rating>
            </div>
            <div class="col-md-10 pl-5 pt-2 ml-3">
              <h5 class="card-title pr-2" style="display: inline">{{content.title}}</h5>
              <fa-icon :icon="['fas', 'trash-alt']" size="1x"
              class="trash-icon"
              @click="deleteItem(content.id)"
              ></fa-icon>
              <p>Comentário: {{content.coment}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
    // methods:{
    //   deleteItem(content){
    //     this.$store.state.contentWatched.splice(indexOf(content.id), 1)
    //   }
    // },
    computed:{
    contentWatched(){
      return this.$store.state.contentWatched
    }
  }
}

</script>

<style>
  .container{
    padding: 20px;
  }
  .trash-icon :hover{
    color: red
  }
</style>