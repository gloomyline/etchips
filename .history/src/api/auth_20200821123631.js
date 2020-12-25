const { axios } = window;

/**
 * class Response extend Promise {
 *   success = true
 *   data = null
 *   count = 0
 *   msg = ''
 * }
 */

export default {
  /**
   * check user is existed or not
   * @param  {String} 账号或手机号
   * @return {Response}
   */
  async checkUser(usernameOrPhone) {
    const response = await axios.post('/chi/customer/free/checkNameOrMobile', { value: usernameOrPhone });
    return response;
  },
  /**
   * @param username {String}
   * @param password {String}
   * @param mobile {String}
   * @param code {String}
   * @param name {String}
   * @return {Response}
   */
  async register({
    username = '',
    password = '',
    mobile = '',
    code = '',
    name = '',
  } = {}) {
    const response = await axios.post('/chi/customer/free/register', {
      username, password, mobile, code, name,
    });
    return response;
  },
  /**
   * fetch the code for logon
   * @param  {String} 手机号
   * @return {Response}
   */
  async fetchCode(phone) {
    const response = await axios.post('/chi/customer/free/sendCode', { phone });
    return response;
  },
  /**
   * @param  {String}
   * @param  {String}
   * @return {Reponse}
   */
  async loginByCode({ phone = '', code = '' } = {}) {
    const response = await axios.post('/chi/customer/free/loginCode', { mobile: phone, code });
    return response;
  },
  /**
   * @param  {String}
   * @param  {String}
   * @return {Response}
   */
  async loginByPwd({ username = '', password = '' } = {}) {
    const response = await axios.post('/chi/customer/free/loginUser', { username, password });
    return response;
  },
  /**
   * @return {Response}
   */
  async logout() {
    const response = await axios.get('/chi/customer/free/logout');
    return response;
  },
  /**
   * @param  {String}
   * @param  {String}
   * @param  {String}
   * @return {Response}
   */
  async resetPwdByCode({ mobile = '', password = '', code = '' } = {}) {
    const response = await axios.post('/chi/customer/free/updatePasswordByCode', { mobile, password, code });
    return response;
  },
  /**
   * @param  {String}
   * @param  {String}
   * @return {Response}
   */
  async resetPwdByOld({ oldPassword = '', password = '' } = {}) {
    const response = await axios.post('/chi/customer/updatePassword', { oldPassword, password });
    return response;
  },
};
