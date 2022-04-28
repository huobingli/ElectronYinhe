import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
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