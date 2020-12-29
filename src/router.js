import Vue from 'vue'
import Router from 'vue-router'

import Content from './components/content/content.vue'
import contentWatched from './components/content/contentWatched.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Content},
        {path: '/BuscarConteudo', component: Content},
        {path: '/ConteudoAssistido', component: contentWatched}
    ]
})