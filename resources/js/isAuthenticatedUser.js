import store from './store'

export default {
    methods: {
        isAuthenticatedUser() {
            console.log(store.getters.authenticated);
            if (store.getters.authenticated == null) {
                this.$router.push({name: "login"});
            }
        }
    }
}
