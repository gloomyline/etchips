import Vue from 'vue';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

const defaultOptions = {
  speed: 400,
};

const plugin = {
  /* eslint-disable no-shadow */
  install(Vue, options) {
    Object.defineProperties(Vue.prototype, {
      Swiper: {
        get() {
          return Swiper;
        },
      },
      $swiper: {
        get() {
          const mergedOptions = { ...defaultOptions, ...options };
          return new Swiper(mergedOptions.el, mergedOptions);
        },
      },
    });
  },
};

Vue.use(plugin);

export default plugin;
