// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
//import axios from 'axios'
import router from './router'
import service from './service.js'


//Vue.prototype.axios = axios;
Vue.use(ElementUI)
Vue.prototype.service = service;
Vue.prototype.vice = "我的属性";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h=>h(App)
})
