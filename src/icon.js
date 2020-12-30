import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


library.add(faArrowRight, faTrashAlt)

Vue.component('fa-icon', FontAwesomeIcon)
