import Vue from 'vue';
import App from './App';
import router from './router';
import './plugins/axios';
import './plugins/element';
// register local components globally
import './components';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
