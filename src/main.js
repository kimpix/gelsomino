// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Explications from './components/Explications'
import Game from './components/Game'
import router from './router'

Vue.config.productionTip = false

window.onload = function () {
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

new Vue({
  el: '#game',
  router,
  template: '<Game/>',
  components: { Game }
})
new Vue({
  el: '#explications',
  router,
  template: '<Explications/>',
  components: { Explications }
})
}