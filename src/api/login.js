const { axios } = window;

export default {
  async fetchCode(phone) {
    const response = await axios.post('/chi/customer/free/sendCode', { phone });
    return response;
  },
  async loginByCode({ phone = '', code = '' } = {}) {
    const response = await axios.post('/chi/customer/free/loginCode', { mobile: phone, code });
    return response;
  },
};
