import {vuexfireMutations} from 'vuexfire'
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({

    state: { },
    getters: {  },

mutations:{
        ...vuexfireMutations
    },
actions: {}


})
