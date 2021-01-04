<template>
  <div class="container">
    <Input @apiContent="results = $event" />
    <div class="cards">
      <div v-for="result in results" :key="result.id">
        <div class="card mb-3 p-3">
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
              <p class="mb-2" style="text-overflow: ellipsis; font-size: 15px">
                {{ result.overview }}
              </p>
              <b-button
                @click="verif(result)"
                v-b-modal.modal-center
                ref="btnShow"
               variant="success"
              >
                Adicionar aos Assistidos</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <b-modal ref="my-modal" hide-footer :title="order.title" id="modal-1">
        <b-form>
          <label for="rating-inline">Avaliar</label>
          <b-form-rating
            id="rating-inline"
            value="0"
            v-model="contentRate"
            class="mb-3"
          ></b-form-rating>
          <b-form-textarea
          v-model="coment"
            placeholder="Deixe um comentário"
            rows="3"
            max-rows="6"
            class="mb-3"
          ></b-form-textarea>
        </b-form>
        <b-button @click="sendResult" variant="outline-success">Salvar</b-button>
      </b-modal>
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
      results: "",
      coment: '',
      contentRate: "",
      order: "",
      sequencia: 0
    };
  },
  methods: {
    verif(result) {
      this.order = result;
      this.$refs["my-modal"].show();
    },
    sendResult() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
      const content = {
        image: this.order.poster_path,
        title: this.order.title,
        id: this.sequencia,
        coment: this.coment,
        rate: this.contentRate
      }
      this.$store.state.contentWatched.push(content)
      this.sequencia++
      this.coment = ''
      this.contentRate = ''
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