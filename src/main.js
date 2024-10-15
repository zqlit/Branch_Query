import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery';
import 'flexslider/jquery.flexslider-min.js';
import 'flexslider/flexslider.css';

window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
