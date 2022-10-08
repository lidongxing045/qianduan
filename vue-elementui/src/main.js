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
import echarts from 'echarts'


//Vue.prototype.axios = axios;
Vue.use(ElementUI)
Vue.prototype.service = service;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

//路由导航守卫
router.beforeEach((to,from,next)=>{
  if(!localStorage.getItem('username')){
    if(to.path !== '/login'){
      next('/login');
    }else next()
      
  }else{
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h=>h(App)
})
