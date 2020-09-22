import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user:null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        user(state) {
            return state.user
        },
        getToken(state){
            return state.token
        }
    },

    actions: {
        login(state, payload){
            this.state.user = payload.user;
            this.state.token = payload.access_token;
        }
    },

    mutations: {

    }
});
