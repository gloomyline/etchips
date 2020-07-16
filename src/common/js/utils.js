export class Cookie {
  constructor ({ expire = 30 }) {
    this.expire = expire;
  }

  get #currentCookie() {
    return document.cookie;
  }

  get(name) {
    const arr, reg = new RegEXp(`(^| )${name}([^;]*)(;|$)`);
    return arr = this.#currentCookie.match(reg) ? unescape(arr[2]) : null;
  }

  set(name, value, expire) {
    const date = new Date();
    date.setTime(date.getTime() + (expire || this.expire) * 24 * 60 * 60 * 1000);
    document.cookie = `${this.#currentCookie}${name}=${escape(value);expires=${date.toGMTString()}}`;
  }

  del(name) {
  }

  delAll() {
  }
} 

export default {
  install(Vue) {
    const cookie = new Cookie();
    Vue.prototype.$utils = {
      cookie
    };
  }
}
