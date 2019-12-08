// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
 import App from './App.vue'
// import Wjj from "./components/CourtBgc"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);


//引入挂载BUS
import Bus from './lib/bus.js'
Vue.prototype.$bus=Bus

Vue.config.productionTip = false
//封装vuex的状态管理文件，并挂载到VM实例上
// import store from './store/'

/* eslint-disable no-new */
new Vue({
  el: '#wjj',
  render: h => h(App),
  router
})



// let  obj = [
//   {id:1,name:"zs",age:18,status:1},
//   {id:3,name:"ls",age:19,status:1},
//   {id:2,name:"ws",age:18,status:1},
//   {id:7,name:"zlz",age:17,status:1},
//   {id:5,name:"zlz",age:18,status:1},
//   {id:6,name:"zlz",age:17,status:1},
//   {id:4,name:"zlz",age:18,status:1},
// ]


// 需求，让id:4的status变为2
// {id:4,name:"zlz",age:17,status:1},
// 1：find  找
// let find = obj.find(value => {
//   return value.id = 4
// })

// find.status = 2

// console.log(obj)


// 2.map

// let map = obj.map(res => {
//   if(res.id === 4){
//     return {
//       ...res,
//       status:2
//     }
//   }
//   return res
// })

// console.log(map)







