import Vue from 'vue'
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import movieList from '@/components/movieList.vue'
import movieInfo from '@/components/movieInfo.vue'
// import bodyText from '@/components/bodyText.vue'

Vue.use(Router)  /* 使用路由 */

export default new Router({
  routes: [ /* 进行路由配置，规定“/”引入到组件 */
    {
      path: '/',//默认页面
      name: 'movieList',
      component: movieList  /* 注册组件 */
    },
    {
      path: '/movieList',
      name: 'movieList',
      component: movieList
    },
    {
      path: '/movieInfo',
      name: 'movieInfo',
      component: movieInfo
     }
    // {
    //   path: '/',
    //   name: 'bodyText',
    //   component: bodyText  /* 注册组件 */
    //}
  ]
})
