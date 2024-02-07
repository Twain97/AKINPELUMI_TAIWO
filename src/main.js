/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/style.css'
import { createApp } from 'vue'
import store from "@/store/index.js"
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import Vue3Lottie from 'vue3-lottie'
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Button from "primevue/button"
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Avatar from 'primevue/avatar';
import Divider from "primevue/divider"
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-green/theme.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faVuejs, faWhatsapp, faHtml5, faCss3Alt, faJs} from '@fortawesome/free-brands-svg-icons'
import { faCode, faPhone, faHouseChimney, faQuestionCircle, faUserSecret, faDownload, faBars, faGlobe,
         faUsersViewfinder, faPalette, faAnglesRight, faHandshakeAngle, faClockRotateLeft, faFireFlameCurved,
        faWind,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import { faStar } from '@fortawesome/free-regular-svg-icons';

library.add(faUserSecret, faTwitter, faHouseChimney, faQuestionCircle
  ,faCode, faPhone, faWhatsapp, faFacebook, faLinkedin, faDownload,faBars,faGlobe,
  faUsersViewfinder, faPalette, faStar,faAnglesRight, faHandshakeAngle, faClockRotateLeft, faVuejs,
  faFireFlameCurved, faWind, faHtml5, faCss3Alt, faJs, faPaperPlane)

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  
app.use(router)
app.use(Vue3Lottie)
app.use(store)
app.use(PrimeVue, { 
  unstyled: false
});
app.use(ToastService);
app.component('Toast',Toast);
app.component('Avatar', Avatar)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Divider', Divider)
app.component('Button', Button);
app.component('Card', Card)
app.component('Carousel', Carousel)
app.use(ElementPlus)
app.mount('#app')
