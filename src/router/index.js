import Vue from 'vue'
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import $ from 'jquery' ;

Vue.use(Router)  /* 使用路由 */

export default new Router({
  routes: [ /* 进行路由配置，规定“/”引入到组件 */
    // {
    //   path: '/hello',
    //   name: 'hello',
    //   component: hello
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/iview/Cy-home')
    },
    {
      path: '/model-firt',
      name: 'model-firt',
      component: () => import('@/components/iview/model-firt')
     }
  ]
})
