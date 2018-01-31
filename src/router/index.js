import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full.vue'

// Views
import Ideas from '@/views/Ideas/Overview/Ideas.vue'
import Idea from '@/views/Ideas/Detail/Idea.vue'

import Teams from '@/views/Teams/Base/Teams.vue'

// Views - Pages
import Page404 from '@/views/Page404.vue'
import Page500 from '@/views/Page500.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // Demo is living in GitHub.io, so required!
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Full,
            children: [
                {
                    path: '/ideas',
                    name: 'Ideas',
                    component: Ideas,
                },
                {
                    path: 'ideas/:id',
                    name: 'Idea Detail',
                    component: Idea
                },
                {
                    path: 'teams',
                    name: 'Teams',
                    component: Teams
                }
            ]
        },
        {
            path: '/404',
            name: 'Page404',
            component: Page404
        },
        {
            path: '/500',
            name: 'Page500',
            component: Page500
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})
