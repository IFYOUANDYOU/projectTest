import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index';

Vue.use(VueRouter)

import Login from '@/pages/Login'

import Home from '@/pages/Home'
import MiniList from '@/pages/MiniList'
import CartList from '@/pages/CartList'

const routes = [
    
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/miniList',
        name: 'miniList',
        component: MiniList
    },
    {
        path: '/cartlist',
        name: 'cartlist',
        component: CartList
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = new VueRouter({
    mode: "hash",
    base: "/dist/",
    routes,
    linkActiveClass: "link-active",//路由激活状态class   exact添加到router-link上解决激活混乱
    scrollBehavior (to, from, savedPosition) {//浏览器在前进或后退时，跳转至指定位置或顶部
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
})

router.beforeEach(async (to, from ,next) => {
    const { name, meta } = to;
    const { requireAuth } = meta;
    const token = store.state.token;
    if(name == 'login') return next();
    if(!!token) return next();
    if(requireAuth){
        return next({
            name: 'login',
            params: { back: to },
        });
    }
})

export default router;