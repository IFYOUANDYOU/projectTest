// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.prototype.$api = 'http://localhost:3000/api/';

import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

import router from './router'
import store from '@/store/index'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

import './assets/reset.css'

import IMessage from '@/common/iMessage'
Vue.use(IMessage);

import iTotast from '@/common/iTotast'
Vue.use(iTotast);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
