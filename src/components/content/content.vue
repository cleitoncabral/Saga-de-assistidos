<template>
  <div class="container">
    <Input @apiContent="results = $event" />
    <div class="cards">
      <div v-for="result in results" :key="result.id">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-2">
              <img
                :src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
                class="card-img"
                alt="Image"
              />
            </div>
            <div class="col-md-10">
              <h5 class="card-title">{{ result.title }}</h5>
              <p class="mb-2" 
              style="text-overflow: ellipsis; font-size: 15px">
                {{ result.overview }}
              </p>
              <b-button 
              @click="verif(result)" 
              v-b-modal.modal-center>Marcar como assistido</b-button>
            </div>
          </div>
        </div>
      </div>
      <b-modal id="modal-center" centered>{{}}</b-modal>
    </div>
  </div>
  <!-- <b-card v-if="!apiData">
    <b-skeleton animation="fade" width="85%"></b-skeleton>
    <b-skeleton animation="fade" width="55%"></b-skeleton>
    <b-skeleton animation="fade" width="70%"></b-skeleton>
  </b-card> -->
</template>

<script>
import Input from "./input/input.vue";
export default {
  components: { Input },     
  data() {
    return {
      results: ""
    };
  },
  methods: {
    verif(result) {
      const order = result
      console.log(order);
    },
  },
};
</script>

<style>
.card-img {
  max-width: 140px;
  width: auto;
  max-height: 170px;
  height: auto;
}
</style>