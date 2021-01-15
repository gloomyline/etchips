<template>
  <div class="header-wrapper">
    <div class="header-container bg-bule">
      <div class="header-top">
        <div class="left"><i class="el-icon el-icon-phone"></i>  客服热线：+86-0755-26433662</div>

        <div class="right sccess" v-if="isAuthenticated" >
          <template  ><i class="el-icon el-icon-s-custom"></i> <div @click="gotozone">个人中心</div>  |   <div @click="openDialog"> 退出登录</div> </template>
          <!-- <template v-else="isAuthenticated" ><a  @click="openDialog">  登录  </a> </template> -->
          <!-- <a>{{ isAuthenticated ? '注销' : '登录' }}</a>   -->
          <!-- /  <a>免费注册</a> -->
        </div>
        <div class="right" v-else >
          <a  @click="openDialog">  登录  </a> 
          <!-- <a>{{ isAuthenticated ? '注销' : '登录' }}</a>   -->
          <!-- /  <a>免费注册</a> -->
        </div>
      </div>
    </div>
    <div class="header-container">
      <div class="header-nav">
        <div class="logo"> </div>
        <div class="search">
          <div style="margin-top: 20px;">
            <!-- <el-input placeholder="请输入料号" v-model="searchContent" class="input-with-select" @keyup.enter.native="gotoSearchResults" @change="search"> -->
              <!-- <el-input placeholder="请输入料号" v-model="searchContent" class="input-with-select" @keyup.enter.native="gotoSearchResults" @keyup.native="gotoSearchResults"> -->
                <el-input placeholder="请输入料号" v-model="searchContent" class="input-with-select" @keyup.enter.native="gotoSearchResults" >
              <el-button slot="append" icon="el-icon el-icon-search" @click="gotoSearchResults"></el-button>
            </el-input>
          </div>
        </div>
        
        <div class="menu">
          <ul>
              <li class="nav-link"><router-link :class="classMap('Home')" to="/">首页</router-link></li>
              <li class="nav-link"><router-link :class="classMap('Detect')" to="/detect">委托检测</router-link></li>
              <li class="nav-link"><router-link :class="classMap('Customer')" to="/report-download">客户服务</router-link></li>
              <!-- <li class="nav-link"><router-link :class="classMap('Factory')" to="/factoryService">原厂服务</router-link></li> -->
              <!-- <li class="nav-link"><router-link :class="classMap('Factory')" to="/factoryService">原厂服务</router-link></li> -->
          </ul>
        </div>
       
      </div>
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
</template>
<script>
import api from '@/api';
export default {
  data(){
    function validator(rule, value, callback) {
      if (/1[2|3|4|5|6|7|8|9]\d{9}/.test(value)) {
        callback();
      } else {
        callback(new Error('请输入正确的手机号!'));
      }
    }
    return {
      searchContent:"",
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
    
    }
  },
   created() {
    this.updateToken();

    this.authUser();
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
  methods:{
    gotozone(){
       this.$router.push({name:'UserInfo'})
    },
    // gotoSearchResults() {
    //   this.$router.push({ name: 'SearchResults', query: { searchContent: this.searchContent } });
    //   // this.$router.push({ name: 'SearchResults'});
    //   // this.$emit("search",this.searchContent)
    // },
    gotoSearchResults() {
      console.log("跳跳")
      this.$router.push({ name: 'SearchResults', query: { searchContent: this.searchContent } });
      // this.$router.push({ name: 'SearchResults'});
      // this.$emit("search",this.searchContent)
    },
    classMap(routeName) {
      const currentRouteName = this.$route.name;
      if (routeName === 'Home' && (currentRouteName === 'SearchResults' || currentRouteName === 'GoodDetails')) {
        return { active: true };
      }
      return { active: routeName === this.$route.name };
    },
       authUser() {
      const currentRoute = this.$route;
      const isRouteRequiredAuth = currentRoute.meta.requireAuth;
      if (isRouteRequiredAuth && !this.isAuthenticated) {
        const self = this;
        this.$message({
          type: 'warning',
          message: '请先登录！',
          onClose() {
            self.$router.go(-1);
          },
        });
      }
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
        console.log("用手机登录信息",response)
         this.$store.commit("setUsername",this.$utils.cookie.get("uid"))
        console.log('this.$utils.cookie.get("uid")用手机登录信息',this.$utils.cookie.get("uid"))
        console.log("headerthis",this)
      } else {
        response = await api.auth.loginByPwd(payload);
        console.log('this.$utils.cookie.get("uid")用密码登录信息',this.$utils.cookie.get("uid"))

        console.log("用密码登录信息",response)
        console.log("headerthis",this)
        this.$store.commit("setUsername",this.$utils.cookie.get("uid"))
        console.log("this.$store.state.uid",this.$store.state.uid)
      }
      if (response.success) {
        this.updateToken();
        this.$message({
          type: 'success',
          message: response.msg,
          onClose() {
            self.isLoginShown = false;
            self.$emit('login', self.token);
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
      console.log("登出",response)
      if (response.success) {
        this.updateToken();
        this.$store.commit("setUsername","")
        console.log("this.$store.state.uid",this.$store.state.uid)
        this.$message({
          type: 'success',
          message: '登出成功！',
          onClose() {
            self.isLogoutShown = false;
            self.$emit('logout');
            if (self.$route.meta.requireAuth) {
              self.$router.push({ name: 'Home' });
            }
          },
        });
      }
    },
  }
  
}
</script>
<style lang="scss" scoped>
.el-icon{
  font-size:16px;
}
.header-wrapper{
  position: relative;
  width:100%;
  height:128px;
  background:#fff;
  font-family: "微软雅黑";
  font-size:16px;
  .header-container{
    position:relative;
    &.bg-bule{
      background:#2c3281
    }
    .header-top{
      position: relative;
      width:1164px;
      left:0;
      right:0;
      margin: 0 auto;
      font-size:13px;
      color:#fff;
      background:#2c3281;
      height:46px;
      line-height: 46px;
      .left{
        float:left
      }
      .right{
        float:right;
        background:#ff1949;
        padding:0 20px;
      }
      .right.sccess{
        float:right;
        background:transparent;
        padding:0;
        div{
          display:inline-block;
          margin:0 10px;
        }
        div:hover{
          color:#ff1949;
          cursor: pointer;
          text-decoration: underline;
        }
        div:last-child{
          display:inline-block;
          margin:0 0 0 10px;
        }
      }
    }
    .header-nav{
      position: relative;
      clear: both;
      width:1164px;
      left:0;
      right:0;
      margin: 0 auto;
      .logo{
        float:left;
        background:url(../../common/images/logo.jpg);
        width:137px;
        height:35px;
        margin-top:20px;
      }
      .menu{
        float:right;
        padding:0 40px;
        ul{
          li{
            float:left;
            height:82px;
            line-height:82px;
            padding:0 20px;
            a:link{
              text-decoration: none;
              color:#4e4e4e;
            }
            a:visited{
              text-decoration: none;
              color:#4e4e4e;
            }
            a:hover{
              text-decoration: underline;
              // font-weight:700;
              color:#ff1949
            }
            
          }
        }
      }
      .search{
        float:right;
      }
    }
    

  }
  
}

</style>