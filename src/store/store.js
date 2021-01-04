import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contentWatched: [],
        mutations:{
            deleteItem(state, {id}){
                const contentId = state.contentWatched.find(element => element.id == id)
                state.contentWatched.splice(state.contentWatched.indexOf(contentId), 1)
                console.log('tesre2')
            }
        },
        actions:{
            deleteItem({commit}, contentWatched){
                commit('deleteItem', contentWatched)
                console.log('tesre')
            }
        } 
    }
})