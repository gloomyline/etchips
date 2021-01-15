import Vue from 'vue';
import $ from 'jquery'
import utilsPlugin from '@/common/js/utils';
import App from './App';
import router from './router';
import './plugins/axios';
import './plugins/element';
import './plugins/swiper';
import '@/common/css/font/font.css';
import '@/common/css/webfont/iconfont.css';
//权限
import '@/router/premit';

// register local components globally
import './components';
import store from './store';

 



Vue.prototype.$ = $;
// bind common utils func to Vue's prototype

Vue.config.productionTip = false;
Vue.use(utilsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
