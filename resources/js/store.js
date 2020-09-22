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
        async logIn({dispatch, commit}, credintials){
            let response = await axios.post('/api/login', credintials);
            this.dispatch('attempt',response);            
        },
        async attempt({dispatch, commit}, response){
            this.commit('SET_TOKEN', response.data.access_token);

            try{
                let response = await axios.get('api/user');
                console.log('user:', response.data);

            }catch(e){
                console.log(e);

            }
        }
    },

    mutations: {
        SET_TOKEN(state, access_token ){
            state.token = access_token;
        }

    }
});
