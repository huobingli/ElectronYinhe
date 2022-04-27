import Vue from 'vue';
import Router from 'vue-router';
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
    }
  ]
});