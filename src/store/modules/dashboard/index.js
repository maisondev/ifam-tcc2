import {getters} from './getters'
import {actions} from './action'
import {mutations} from './mutations'

const state = {
};
const namespaced = true;

export const dashboard = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};


