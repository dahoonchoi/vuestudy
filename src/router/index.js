import Vue from 'vue'
import Router from 'vue-router'
import {Main} from '@/components/container/'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Router)
Vue.use(BootstrapVue)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
