import Vue from 'vue';
import Router from 'vue-router';
import LeftNavi from './views/LeftNavi.vue';

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
      name: 'LeftNavi',
      component: LeftNavi
    }
  ]
});