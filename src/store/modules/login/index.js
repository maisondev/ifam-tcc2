import {getters} from './getters'
import {actions} from './action'
import {mutations} from './mutations'

const state = {
    usuario: null
};
const namespaced = true;

export const login = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};


