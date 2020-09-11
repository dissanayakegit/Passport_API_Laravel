import vue from 'vue';
import router from './router.js'
require('./bootstrap');

window.Vue = require('vue');

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import App from './App.vue'


const app = new Vue({
    el: '#app',

    router,

    components:{ App}});