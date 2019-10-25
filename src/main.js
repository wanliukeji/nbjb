// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// npm install --save good-storage
import Vue from 'vue'  /* 这里是引入vue文件 */
import App from './App'  /* 这里是引入同目录下的App.vue模块 */
import Vuex from 'vuex'
// import axios from 'axios'
import router from './router'  /* 这里是引入vue的路由 */
import VueRouter from 'vue-router'
import Vant from 'vant'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vant/lib/index.css';
import VueResource from 'vue-resource'
//element-ui的全部组件
import ElementUI from 'element-ui'
//element-ui的css
import 'element-ui/lib/theme-chalk/index.css'
//引用 ivew 全局样式
import iView from 'iview'
import 'iview/dist/styles/iview.css'
//引入视频播放
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

//引入百度地图
//百度地图
//引入移动端框架
Vue.use(Vuex);
Vue.use(Vant);
Vue.use(VueResource);
//使用elementUI
Vue.use(ElementUI)
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false;
const RouterConfig = {
  routes: router
};
//页面跳转异常处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
  // render: h => h(App)
})



