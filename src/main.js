import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBurger, faUtensils, faXmark, faMagnifyingGlass, faEye, faHeart, faCartShopping, faStar, faStarHalf, faStarHalfAlt, faShippingFast, faDollarSign, faHeadset, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
library.add(faBurger, faUtensils, faXmark, faMagnifyingGlass, faEye, faHeart, faCartShopping, faStar, faStarHalf, faStarHalfAlt, faShippingFast, faDollarSign, faHeadset, faQuoteRight)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

/** Let's import images */
