// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin, SidebarPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUserSecret)
library.add(faShoppingCart)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Install BootstrapVue
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(SidebarPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
