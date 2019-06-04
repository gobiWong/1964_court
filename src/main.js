// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//封装vuex的状态管理文件，并挂载到VM实例上
// import store from './store/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
