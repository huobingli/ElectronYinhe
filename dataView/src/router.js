import Vue from 'vue';
import Router from 'vue-router';
import TableUI from './views/TableUI.vue';
import Navigation from './views/Navigation.vue';
import Search from './views/Search.vue';
import Main from './views/Main.vue';
import L1Real from './views/L1Real.vue';
import RealIndex from './views/RealIndex.vue';
import TaskIndex from './views/TaskIndex.vue';
import DownloadIndex from './views/DownloadIndex';

// 测试工具
// import Tool from './views/Tool.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect: '/Main'
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
    },
    {
      path: '/L1Real',
      name: 'L1Real',
      component: L1Real
    },
    {
      path: '/RealIndex',
      name: 'RealIndex',
      component: RealIndex
    },
    {
      path: '/TaskIndex',
      name: 'TaskIndex',
      component: TaskIndex
    },
    {
      path: '/DownloadIndex',
      name: 'DownloadIndex',
      component: DownloadIndex
    }
  ]
});