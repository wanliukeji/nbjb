// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'  /* 这里是引入vue文件 */
import App from './App'  /* 这里是引入同目录下的App.vue模块 */
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'  /* 这里是引入vue的路由 */
import Vant from 'vant'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vant/lib/index.css';
import VueResource from 'vue-resource'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
// import popup from '/src/view/popup'
import layer from 'vue-layer'

// Vue.use(layer);
// Vue.prototype.$layer = layer(Vue);
// Vue.component('popup', popup);
Vue.use(Vuex);
Vue.use(Vant);
// Vue.use($query);
Vue.use(VueResource);
Vue.use(ElementUI) //使用elementUI

// Vue.use(axios);
// Vue.prototype.$http=axios;
// Vue.prototype.$http.get=VueResource;

// Vue.prototype.$http=axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


