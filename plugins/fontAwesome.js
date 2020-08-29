import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLongArrowAltRight,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLongArrowAltRight, faEnvelopeSquare, faGithubSquare, faLinkedin)

Vue.component('fa', FontAwesomeIcon)
