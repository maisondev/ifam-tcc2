import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './axios-auth'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VuePapaParse from 'vue-papa-parse'
import Papa from 'papaparse';
import SmartTable from 'vuejs-smart-table'

Vue.use(SmartTable)

Vue.use(Papa);
Vue.use(VuePapaParse)

Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
