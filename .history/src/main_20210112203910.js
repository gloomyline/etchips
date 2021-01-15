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
 //全局监听，页面刷新的时候将store里state的值存到sessionStorage中，然后从sessionStorage中获取，再赋值给store。然后再把session里面存的删除即可，相当于中间件的作用。
 //在页面加载时读取sessionStorage里的状态信息
 if (sessionStorage.getItem("store")) {
  this.$store.replaceState(
    Object.assign(
      {},
      this.$store.state,
      JSON.parse(sessionStorage.getItem("store"))
    )
  );
  sessionStorage.removeItem("store")
}

//在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(this.$store.state));
});



Vue.prototype.$ = $;
// bind common utils func to Vue's prototype

Vue.config.productionTip = false;
Vue.use(utilsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
