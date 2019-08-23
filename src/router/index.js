import Vue from 'vue'
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import movieList from '@/components/movieList.vue'
import movieInfo from '@/components/movieInfo.vue'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';  /* 引入bootstrap 样式 */
// import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery' ;
import index from '@/components/index.vue'
import hello from '@/components/hello.vue'
import login from '@/view/login.vue'
import home from '@/view/home.vue'

Vue.use(Router)  /* 使用路由 */

export default new Router({
  routes: [ /* 进行路由配置，规定“/”引入到组件 */
    {
      path: '/movieInfo',
      name: 'movieInfo',
      component: movieInfo
     },
    {
      path: '/showModel',
      name: 'showModel',
      component: () => import('@/components/showModel.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home.vue')
    }
  ]
})
