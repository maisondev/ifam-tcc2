import Vue from 'vue'
import Vuex from 'vuex'
import {dashboard} from "./modules/dashboard";

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    autenticado: false
  },
  getters: {
    autenticado: state => state.autenticado
  },
  mutations: {
    setAutenticado(state, request){
      state.autenticado = request
    }
  },
  actions: {
    setAutenticado({commit}, request){
      commit('setAutenticado',request)
    }
  },
  modules: {
    dashboard
  }
})
