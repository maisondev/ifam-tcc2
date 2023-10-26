import Vue from 'vue'
import Vuex from 'vuex'
import {dashboard} from "./modules/dashboard";
import {login} from "./modules/login";
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    user: null,
    autenticado: false
  },

  getters: {
    autenticado: state => state.autenticado
  },

  mutations: {
    set_user(state, request){
      state.user = request
    },
    clear_user(){
      state.user = null
    },
    setAutenticado(state, request){
      state.autenticado = request
    }
  },

  actions: {
    async login(context, request){

    },
    async cadastro(context,request){

    },
    async logout(context){

    },

    setAutenticado({commit}, request){
      commit('setAutenticado',request)
    }
  },

  modules: {
    dashboard,
    login
  }
})
