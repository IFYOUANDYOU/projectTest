import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import MiniList from '@/pages/MiniList'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/miniList',
        name: 'miniList',
        component: MiniList
    }
]

const router = new VueRouter({
    mode: "hash",
    base: "/dist/",
    routes
})

export default router;