import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLongArrowAltRight)

Vue.component('fa', FontAwesomeIcon)
