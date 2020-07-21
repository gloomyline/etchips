<template lang="html">
  <div class="et-nav">
    <div class="et-nav-wrap" :class="{'has-prefix': hasPrefix}">
      <div class="prefix" v-if="hasPrefix">
        <img class="logo" src="./icon-et-logo.png" width="160" height="36">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img class="flag" src="./icon-china-flag.png" width="30" height="30">
            <i class="el-icon-caret-bottom el-icon--right angel"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中国</el-dropdown-item>
            <el-dropdown-item>美国</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="nav-with-login" :class="{'no-prefix': !hasPrefix}">
        <ul class="nav-links">
          <li class="nav-link"><router-link :class="classMap('Home')" to="/">首页</router-link></li>
          <li class="nav-link"><router-link :class="classMap('Detect')" to="/detect">委托检测</router-link></li>
          <li class="nav-link"><router-link :class="classMap('Customer')" to="/customerService">客户服务</router-link></li>
          <li class="nav-link"><router-link :class="classMap('Factory')" to="/factoryService">原厂服务</router-link></li>
        </ul>
        <div class="btn-login" @click="openDialog">
          <span class="label">{{ isAuthenticated ? '登出' : '登录' }}</span>
          <div class="icon-wrap"><i class="el-icon-user"></i></div>
        </div>
        <el-dialog
          ref="loginDialog"
          title="登录"
          :visible.sync="isLoginShown"
          width="420px"
          center
          top="25vh">
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
            <div class="login-by-pwd" v-show="!isLoginByCode">
              <el-form-item prop="username" label="用户名：" label-width="80px">
                <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名">
                </el-input>
              </el-form-item>
              <el-form-item prop="password" label="密码：" label-width="80px">
                <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" show-password placeholder="请输入密码">
                </el-input>
              </el-form-item>
            </div>
            <div class="login-by-code" v-show="isLoginByCode">
              <el-form-item prop="phone" label="手机号：" label-width="80px">
                <el-input v-model="loginForm.phone" prefix-icon="el-icon-mobile-phone" placeholder="请输入手机号">
                </el-input>
              </el-form-item>
              <el-form-item prop="code" label="验证码：" label-width="80px">
                <el-input v-model="loginForm.code" prefix-icon="el-icon-message" placeholder="请输入验证码">
                  <et-counter-button :is-validated="isPhoneValidated" label="获取验证码" @on-click="fetchCode" slot="append"></et-counter-button>
                </el-input>
              </el-form-item>
            </div>
            <div class="inline-center">
              <el-button type="text" @click="isLoginShown=false;isRegisterShown=true;">没有账号，去注册</el-button>
              <el-button type="text" @click="isLoginByCode = !isLoginByCode">切换登录方式</el-button>
            </div>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="loginHandler" :loading="isLoginLoading">登录</el-button>
          </span>
        </el-dialog>
        <el-dialog
          ref="registerDialog"
          title="注册"
          :visible.sync="isRegisterShown"
          width="420px"
          center
          top="10vh">
          <el-form ref="registerForm" :model="registerForm" :rules="registerRules">
            <el-form-item prop="username" label="用户名：" label-width="80px">
              <el-input v-model="registerForm.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名">
              </el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码：" label-width="80px">
              <el-input v-model="registerForm.password" prefix-icon="el-icon-lock" show-password placeholder="请输入密码">
              </el-input>
            </el-form-item>
            <el-form-item prop="name" label="姓名：" label-width="80px">
              <el-input v-model="registerForm.name" prefix-icon="el-icon-user" placeholder="请输入姓名">
              </el-input>
            </el-form-item>
            <el-form-item prop="mobile" label="手机号：" label-width="80px">
              <el-input v-model="registerForm.mobile" prefix-icon="el-icon-mobile-phone" placeholder="请输入手机号">
              </el-input>
            </el-form-item>
            <el-form-item prop="code" label="验证码：" label-width="80px">
              <el-input v-model="registerForm.code" prefix-icon="el-icon-message" placeholder="请输入验证码">
                <et-counter-button :is-validated="isMobileValidated" label="获取验证码" @on-click="fetchCode" slot="append"></et-counter-button>
              </el-input>
            </el-form-item>
            <div class="inline-center"><el-button type="text" @click="isLoginShown=true;isRegisterShown=false;">已有账号，去登录</el-button></div>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="registerHandler" :loading="isRegisterLoading">注册</el-button>
          </span>
        </el-dialog>
        <el-dialog
          :visible.sync="isLogoutShown"
          width="30%">
          <span>确认登出吗？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="isLogoutShown = false">取 消</el-button>
            <el-button type="primary" @click="isLogoutShown = false;logout();">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'EtNav',
  props: {
    hasPrefix: Boolean,
  },
  data() {
    function validator(rule, value, callback) {
      if (/1[2|3|4|5|6|7|8|9]\d{9}/.test(value)) {
        callback();
      } else {
        callback(new Error('请输入正确的手机号!'));
      }
    }
    return {
      token: '',
      isLoginShown: false,
      isLoginByCode: false,
      isRegisterShown: false,
      isLogoutShown: false,
      loginForm: {
        phone: '',
        code: '',
        username: '',
        password: '',
      },
      loginRules: {
        phone: [{
          required: true, message: '请输入正确的手机号', trigger: 'blur', validator,
        }],
        code: [{
          required: true, message: '请填写验证码', trigger: 'blur',
        }],
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
      },
      registerForm: {
        username: null,
        password: null,
        mobile: null,
        code: null,
        name: null,
      },
      /* eslint-disable */
      registerRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' },
          { validator: this.usernameValidator, trigger: 'blur' },
        ],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
        mobile: [
          { required: true, trigger: 'blur', message: '请输入手机号', validator },
          { validator: this.phoneValidator, trigger: 'blur' },
        ],
        code: [{
          required: true, message: '请填写验证码', trigger: 'blur',
        }],
        name: [{
          required: true, message: '请输入姓名', trigger: 'blur',
        }],
      },
      /* eslint-enable */
      isPhoneValidated: false,
      isMobileValidated: false,
      isLoginLoading: false,
      isRegisterLoading: false,
    };
  },
  created() {
    this.updateToken();
  },
  computed: {
    isAuthenticated() {
      return !!this.token;
    },
  },
  watch: {
    /* eslint-disable object-shorthand */
    'loginForm.phone'(val) {
      this.isPhoneValidated = /1[2|3|4|5|6|7|8|9]\d{9}/.test(val);
    },
    'registerForm.mobile'(val) {
      this.isMobileValidated = /1[2|3|4|5|6|7|8|9]\d{9}/.test(val);
    },
  },
  methods: {
    classMap(routeName) {
      const currentRouteName = this.$route.name;
      if (routeName === 'Home' && (currentRouteName === 'SearchResults' || currentRouteName === 'GoodDetails')) {
        return { active: true };
      }
      return { active: routeName === this.$route.name };
    },
    openDialog() {
      if (this.isAuthenticated) {
        this.isLogoutShown = true;
      } else {
        this.isLoginShown = true;
      }
    },
    closeLogin() {
      this.isLoginShown = false;
    },
    async usernameValidator(rule, value, callback) {
      const response = await api.auth.checkUser(value);
      if (response.success) {
        callback();
      } else {
        callback(new Error('用户名不合法或已存在！'));
      }
    },
    async registerHandler() {
      const validation = await this.$refs.registerForm.validate();
      if (!validation) return;
      this.isRegisterLoading = true;
      const response = await api.auth.register(this.registerForm);
      if (response.success) {
        const self = this;
        this.$message({
          type: 'success',
          message: response.msg,
          onClose() {
            self.isLoginShown = true;
            self.isRegisterShown = false;
          },
        });
      } else {
        this.$message({
          type: 'error',
          message: response.msg,
        });
      }
      this.isRegisterLoading = false;
    },
    updateToken() {
      this.token = this.$utils.cookie.get('token');
    },
    async loginHandler() {
      const self = this;
      function validatePromise() {
        return new Promise((resolve) => {
          self.$refs.loginForm.validateField(self.isLoginByCode ? ['phone', 'code'] : ['username', 'password'], (errMsg) => {
            if (errMsg) {
              resolve(false);
            } else {
              resolve(true);
            }
          });
        });
      }
      const validation = await validatePromise();
      if (!validation) return;
      this.isLoginLoading = true;
      const payload = this.isLoginByCode ? {
        phone: this.loginForm.phone,
        code: this.loginForm.code,
      } : {
        username: this.loginForm.username,
        password: this.loginForm.password,
      };
      let response;
      if (this.isLoginByCode) {
        response = await api.auth.loginByCode(payload);
      } else {
        response = await api.auth.loginByPwd(payload);
      }
      if (response.success) {
        this.updateToken();
        this.$message({
          type: 'success',
          message: response.msg,
          onClose() {
            self.isLoginShown = false;
          },
        });
      } else {
        this.$message({
          type: 'error',
          message: response.msg,
        });
      }
      this.isLoginLoading = false;
    },
    /* eslint-disable consistent-return */
    async fetchCode() {
      if (!this.isPhoneValidated && !this.isMobileValidated) {
        return this.$message({
          message: '请输入手机号后获取验证码！',
          type: 'warning',
        });
      }
      /* eslint-disable no-nested-ternary */
      const phone = this.isLoginShown
        ? this.loginForm.phone
        : this.isRegisterShown
          ? this.registerForm.mobile
          : '';
      const response = await api.auth.fetchCode(phone);
      if (response.success) {
        this.$message({
          type: 'success',
          message: response.msg,
        });
      } else {
        this.$message({
          type: 'error',
          message: response.msg,
        });
      }
    },
    async logout() {
      const self = this;
      const response = await api.auth.logout();
      if (response.success) {
        this.updateToken();
        this.$message({
          type: 'success',
          message: '登出成功！',
          onClose() {
            self.isLogoutShown = false;
          },
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.et-nav
  color: $white
  background-color: $black
  .et-nav-wrap
    display: flex
    justify-content: space-between
    width: 70%
    margin: 0 auto
    &.has-prefix
      padding-top: 10px
    .prefix
      height: 64px
      padding-top: 14px
      .logo
        vertical-align: middle
        margin-right: 32px
    .nav-with-login
      display: flex
      &.no-prefix
        margin: 0 auto
      .nav-links
        display: flex
        margin-right: 48px
        a
          display: inline-block
          width: 86px
          height: 64px
          line-height: 64px
          text-align: center
          font-size: 16px
          color: $text-grey
          text-decoration: none
          &.active
            font-size: 18px
            color: $white
      .btn-login
        width: 132px
        height: 40px
        padding-left: 32px
        margin-top: 7px
        cursor: pointer
        border-radius: 25px 25px
        background-color: $red
        .label
          display: inline-block
          line-height: 40px
          font-size: 14px
        .icon-wrap
          display: inline-block
          vertical-align: top
          width: 32px
          height: 32px
          line-height: 32px
          text-align: center
          margin-top: 4px
          margin-left: 24px
          border-radius: 50%
          background-color: $red2
</style>

<style lang="stylus">
.et-nav
  .el-dropdown
    vertical-align: middle
    cursor: pointer
    .flag, .angel
      display: inline-block
      vertical-align: middle
</style>
