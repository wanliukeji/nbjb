import Vue from 'vue'
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import $ from 'jquery' ;

Vue.use(Router)  /* 使用路由 */

export default new Router({
  mode: 'history',
  base: '/',
  /* 进行路由配置，规定“/”引入到组件 */
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: {
        title: "首页"
      }
    }
  ]
});



