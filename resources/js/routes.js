import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";

Vue.use(VueRouter);

export default new VueRouter({

    routes: [
        {
            name: 'DashBoard',
            path: '/',
            component: DashBoard
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
    ],
    mode: 'history',
})
