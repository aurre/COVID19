import Vue from 'vue';
import Router from 'vue-router';

import Home from "@/pages/Home";
import Statistics from "@/pages/Statistics";


Vue.use(Router);

export default new Router({
    mode: 'history',
    fallback: false,
    routes: [
        { path: '/', name: 'home', component: Home },
        { path:'/statistics', name: 'statistics', component: Statistics },

        { path: '*', redirect: { name: 'home '} }
    ]
});