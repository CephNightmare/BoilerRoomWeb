import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full.vue'

// Views
import Ideas from '@/views/Ideas/Index.vue'
import IdeaOverview from '@/views/Ideas/Overview/Overview.vue'
import IdeaDetail from '@/views/Ideas/Detail/Detail.vue'
import IdeaCards from '@/views/Ideas/Cards/Cards.vue'

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
                    path: '/Ideas',
                    name: 'Ideas',
                    component: Ideas,
                    children: [
                        {
                            path: 'Overview',
                            name: 'Idea Overview',
                            component: IdeaOverview,
                        },
                        {
                            path: ':id',
                            name: 'Idea Detail',
                            component: IdeaDetail
                        },
                        {
                            path: ':id/Cards',
                            name: 'Cards',
                            component: IdeaCards,
                        }
                    ]
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
