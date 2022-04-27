import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from '@/api';
import util from '@/utils/util.js';
import ElementUI from 'element-ui';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { initClient } from './utils/init-client'

Vue.use(ElementUI);
Vue.use(Element, { size: 'small', zIndex: 3000 });


Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();
//所有获取数据的地方
Vue.prototype.$api = api;
//工具类函数
Vue.prototype.$util = util;

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

initClient(app);