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
import { library } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all"
import "@/assets/css/style.css"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE1,
  authDomain: process.env.VUE_APP_FIREBASE2,
  projectId: process.env.VUE_APP_FIREBASE3,
  storageBucket: process.env.VUE_APP_FIREBASE4,
  messagingSenderId: process.env.VUE_APP_FIREBASE5,
  appId: process.env.VUE_APP_FIREBASE6,
  measurementId: process.env.VUE_APP_FIREBASE7
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log("auth",auth)


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
  firebase,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
