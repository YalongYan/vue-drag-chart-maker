import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
    },
    {
        path: '/preview',
        name: 'Preview',
        component: () => import('@/views/Preview'),
    },
    {
        path: '/personal',
        name: 'Personal',
        component: () => import('@/views/Personal'),
    },
]

export default new Router({
    routes,
})
