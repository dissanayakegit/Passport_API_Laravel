import vue from 'vue';
require('./bootstrap');

window.Vue = require('vue');

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import App from './App.vue'
import store from './store'
import router from './routes'


new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});
