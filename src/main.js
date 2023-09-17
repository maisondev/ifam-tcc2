import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './axios-auth'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import Papa from 'papaparse';
import {ServerTable, ClientTable, Event} from 'vue-tables-2-premium';
import SmartTable from 'vuejs-smart-table'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all"


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import config so we can set a default style
import { config } from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// set the default style
config.styleDefault = "duotone";

Vue.use(SmartTable)
Vue.use(ClientTable, []);
Vue.use(ServerTable, []);
Vue.use(Papa);

Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
