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
      },
      component: () => import('@/components/iview/home')
    },{
      path: '/class',
      name: 'class',
      meta: {
        title: "分类"
      },
      component: () => import('@/components/iview/class')
    },
    {
      path: 'regedit',
      name: 'regedit',
      meta: {
        title: "注册"
      },
      component: () => import('@/components/iview/regedit')
    }, {
      path: '/login',
      name: 'login',
      meta: {
        title: "登录"
      },
      component: () => import('@/components/iview/login')
    },
    {
      path: '/personal',
      name: 'personal',
      meta: {
        title: "个人中心"
      },
      component: () => import("@/components/iview/personal")
    },
    {
      path: '/good',
      name: 'good',
      meta: {
        title: "商品"
      },
      component: () => import("@/components/iview/good")
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        title: "个人中心"
      },
      component: () => import("@/components/iview/mine")
    },
    {
      path: '/address',
      name: 'address',
      meta: {
        title: "送货地址"
      },
      component: () => import("@/components/iview/Address")
    },
    {
      path: '/wallet',
      name: 'wallet',
      meta: {
        title: "我的钱包"
      },
      component: () => import("@/components/iview/wallet")
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        title: "我的钱包"
      },
      component: () => import("@/components/iview/order")
    },
    {
      path: '/team',
      name: 'team',
      meta: {
        title: "我的团队"
      },
      component: () => import("@/components/iview/team")
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        title: "领取面膜"
      },
      component: () => import("@/components/iview/shop")
    }
  ]
  // beforeEach:function () {
  //   //  路由发生变化修改页面title
  //   if (to.meta.title) {
  //     document.title = to.meta.title;
  //   }

    //  是否需要登录
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //   if (!localStorage.Authorization) {
    //     next({
    //       path: '/login'
    //     })
    //   } else {
    //     next();
    //   }
    // } else {
    //   next();
    // }
  // }
});



// export default router

