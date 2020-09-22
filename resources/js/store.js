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
        register({dispatch, commit}, save_data){
            axios.post('api/register', save_data);
        },
        async logIn({dispatch, commit}, credentials){
            let response = await axios.post('/api/login', credentials);
            this.dispatch('attempt',response.data.access_token);
        },
        async attempt({dispatch, commit}, token){
            commit('SET_TOKEN', token);
            try{
                if(token){
                    let response = await axios.post('api/user');
                    if (Object.keys(response.data).length === 0) {
                        commit('SET_TOKEN', null)
                    }
                    commit('SET_USER', response.data);
                }
            }catch(e){
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        },

        signOut({commit}) {
            return axios.get('api/logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            });
        }
    },

    mutations: {
        SET_TOKEN(state, access_token ){
            state.token = access_token;
        },
        SET_USER(state, user ){
            state.user = user;
        }

    }
});
