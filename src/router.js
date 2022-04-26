import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dapan from './views/Dapan.vue';
import Gaolin from './views/Gaolin.vue';
import Gaoyi from './views/Gaoyi.vue';
import SXX from './views/SXX.vue';
import TableUI from './views/TableUI.vue';
import Navigation from './views/Navigation.vue';
import Search from './views/Search.vue';
import Main from './views/Main.vue';

// 测试工具
// import Tool from './views/Tool.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'home',
      component: Home
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import( /* webpackChunkName: "Home" */ './views/Home.vue')
    },
    {
      path: '/dapan',
      name: 'dapan',
      component: Dapan
    },
    {
      path: '/gaolin',
      name: 'gaolin',
      component: Gaolin
    },
    {
      path: '/gaoyi',
      name: 'gaoyi',
      component: Gaoyi
    },
    {
      path: '/sxx',
      name: 'sxx',
      component: SXX
    },
    {
      path: '/TableUI',
      name: 'TableUI',
      component: TableUI
    },
    {
      path: '/Navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
});