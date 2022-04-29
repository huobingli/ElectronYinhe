import Vue from 'vue';
import App from './App.vue';
// 路由
import router from './router';
// 组件库
import ElementUI from 'element-ui';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 暴露给客户端接口
import { initClient } from './utils/init-client'

Vue.use(ElementUI);
Vue.use(Element, { size: 'small', zIndex: 3000 });


Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

initClient(app);