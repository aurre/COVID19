import Vue from 'vue';
import Router from 'vue-router';

import Home from "@/pages/Home";


Vue.use(Router);

export default new Router({
    mode: 'history',
    fallback: false,
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '*', redirect: { name: 'home '} }
    ]
});