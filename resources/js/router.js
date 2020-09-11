import Vue from 'vue';
import VueRouter from 'vue-router';
import CustomerList from "./components/CustomerList";

Vue.use(VueRouter);

export default new VueRouter({
    routes :[
        {
            name: 'customer',
            path:'/customer' ,
            component : CustomerList
           }
    ],
       
    mode:'history'
});