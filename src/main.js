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
