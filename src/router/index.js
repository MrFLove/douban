import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import Index from '@/pages/index/index'
import Notfind from '@/pages/notfind/notfind'
import BVA from '@/pages/bva/bva'
import Book from '@/pages/bva/book'
import Mine from '@/pages/mine/mine'
Vue.use(Router);
//引用代理
Vue.prototype.$axios = Axios;

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/notfind',
      component: Notfind
    },{
    	path: '/bva',
    	name: 'bva',
    	component: BVA
    },{
      path: '/bva/book',
      name: 'book',
      component: Book
    },{
      path: '/mine',
      name: 'mine',
      component: Mine
    },{
      path: '/notfind',
      name: 'notfind',
      component: Notfind
    }
  ]
})
