import Vue from 'vue';
import utilsPlugin from '@/common/js/utils';
import App from './App';
import router from './router';
import './plugins/axios';
import './plugins/element';
// register local components globally
import './components';
// bind common utils func to Vue's prototype

Vue.config.productionTip = false;

Vue.use(utilsPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
