import Vue from 'vue'
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';  /* 引入bootstrap 样式 */
// import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery' ;

Vue.use(Router)  /* 使用路由 */

export default new Router({
  routes: [ /* 进行路由配置，规定“/”引入到组件 */
    // {
    //   path: '/hello',
    //   name: 'hello',
    //   component: hello
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import('@/view/home.vue')
    // }
  ]
})
