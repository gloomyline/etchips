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
        <div class="btn-login" @click="openLogin">
          <span class="label">注册/登录</span>
          <div class="icon-wrap"><i class="el-icon-user"></i></div>
        </div>
        <el-dialog
          ref="loginDialog"
          title="登录/注册"
          :visible.sync="isLoginShown"
          width="420px"
          center
          top="32vh">
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
            <el-form-item prop="phone" label="手机号：" label-width="80px">
              <el-input v-model="loginForm.phone" placeholder="请输入手机号">
                <i class="el-icon-mobile-phone" slot="prepend"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="code" label="验证码：" label-width="80px">
              <el-input v-model="loginForm.code" placeholder="请输入验证码">
                <i class="el-icon-message" slot="prepend"></i>
                <et-counter-button :is-validated="isPhoneValidated" label="获取验证码" @on-click="fetchCode" slot="append"></et-counter-button>
              </el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="loginHandler" :loading="isLoginLoading">登录/注册</el-button>
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
      isLoginShown: false,
      loginForm: {
        phone: '',
        code: '',
      },
      loginRules: {
        phone: [{
          required: true, message: '请输入正确的手机号', trigger: 'blur', validator,
        }],
        code: [{
          required: true, message: '请填写验证码', trigger: 'blur',
        }],
      },
      isPhoneValidated: false,
      isLoginLoading: false,
    };
  },
  created() {
  },
  watch: {
    /* eslint-disable object-shorthand */
    'loginForm.phone'(val) {
      this.isPhoneValidated = /1[2|3|4|5|6|7|8|9]\d{9}/.test(val);
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
    openLogin() {
      this.isLoginShown = true;
    },
    closeLogin() {
      this.isLoginShown = false;
    },
    async loginHandler() {
      const validation = await this.$refs.loginForm.validate();
      if (!validation) return;
      this.isLoginLoading = true;
      const response = await api.login.loginByCode(this.loginForm);
      if (response.success) {
        const self = this;
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
      if (!this.isPhoneValidated) {
        return this.$message({
          message: '请输入手机号后获取验证码！',
          type: 'warning',
        });
      }
      const response = await api.login.fetchCode(this.loginForm.phone);
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
        padding-left: 10px
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
