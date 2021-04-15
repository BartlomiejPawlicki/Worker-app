import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage.vue'
import Developer from './pages/Developer.vue'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  {path:"/", component:HomePage},
  {path:'/workers/:id', component:Developer},
]

const router = new VueRouter({
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
