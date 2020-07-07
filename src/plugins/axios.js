
import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
/* eslint-disable */
function transformJson2FormData(data) {
  let ret = '';
  for (const it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
  }
  return ret;
}
/* eslint-enable */
axios.defaults.transformRequest = [transformJson2FormData];

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  baseURL: process.env.NODE_ENV === 'development'
    // env for development
    ? '/api'
    // env for production
    : 'http://login.honengelec.com:8108',
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  // Do something before request is sent
  (cfg) => cfg,
  // Do something with request error
  (err) => Promise.reject(err),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  // Do something with response data
  (res) => res.data,
  // Do something with response error
  (err) => Promise.reject(err),
);

/* eslint-disable */
Plugin.install = function (Vue, options) {
  Vue.axios = axiosInstance;
  window.axios = axiosInstance;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axiosInstance;
      },
    },
    $axios: {
      get() {
        return axiosInstance;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
/* eslint-enable */
