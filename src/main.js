// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {sync} from 'vuex-router-sync';
import store from './store/'
import router from './router'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

//router sync with vuex
const unsync = sync(store, router);

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {
        App
    },
    render: h => h(App)
});