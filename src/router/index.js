import Vue from 'vue'
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import $ from 'jquery' ;

import index from '../components/index'
import group from '../components/job/group'
import info from '../components/job/info'

import appGroup from '../components/app/appGroup'
import appIndex from '../components/app/appIndex'
import appInfo from '../components/app/appInfo'
import jobList from '../components/app/jobList'
import companyList from '../components/app/companyList'
import resList from '../components/app/resList'
import companyGroup from '../components/job/companyGroup'

Vue.use(Router)  /* 使用路由 */

export default new Router({
  /* 进行路由配置，规定“/”引入到组件 */
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/appIndex',
      name: 'appIndex',
      component: appIndex
    },
    {
      path: '/appGroup',
      name: 'appGroup',
      component: appGroup
    },
    {
      path: '/appInfo',
      name: 'appInfo',
      component: appInfo
    },
    {
      path: '/jobList',
      name: 'jobList',
      component: jobList
    },
    {
      path: '/companyList',
      name: 'companyList',
      component: companyList
    },
    {
      path: '/resList',
      name: 'resList',
      component: resList
    },
    {
      path: '/companyGroup',
      name: 'companyGroup',
      component: companyGroup
    }
  ]
})
;
