import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//在vue中使用elementui
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
