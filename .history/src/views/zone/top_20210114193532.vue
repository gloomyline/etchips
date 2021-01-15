<template>
  <div class="topwrapper">
    <div class="top">
      
      <div class="logo" @click="gotohome"></div>
      <div class="right"> 欢迎你，<span>{{uid}}</span>   |   <div class="logout" @click="logout">退出登录</div></div>
    </div>
  </div>
</template>
<script>
import api from '@/api';
export default {
  data(){
    return {
      // uid:""
      token:''
    }
  },
  computed:{
    uid:function(){
      return this.$store.state.uid
    },
    isAuthenticated() {
      return !!this.token;
    },

  },
  // created(){
  //   this.authUser()
  //   this.updateToken()
  // },
  created(){
    
    this.updateToken()
    this.authUser()
  },
  methods:{
    updateToken() {
      this.token = this.$utils.cookie.get('token');
    
      console.log("this.token````````",this.token)
    },
    gotohome(){
      this.$router.push({path:"/"})
    },
    authUser() {
      const currentRoute = this.$route;
      const isRouteRequiredAuth = currentRoute.meta.requireAuth;
      console.log("asdfasdfasdf",isRouteRequiredAuth,!this.isAuthenticated)
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
    async logout() {
      const self = this;
      const response = await api.auth.logout();
      console.log("登出",response)
      sessionStorage.removeItem("store")
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
  // created(){
  //   this.uid = this.$store.state.uid
  // }
}
</script>>
<style lang="scss" scoped>
.topwrapper {
  height:80px;
  box-shadow:1px 1px 8px #888888;
  background:#fff;
  .top{
    position: relative;
    width:1164px;
    left:0;
    right:0;
    margin:0 auto;
    .logo{
        float:left;
        background:url(../../common/images/logo.jpg) no-repeat;
        height:35px;
        margin-top:20px;
        padding-left:150px;
        line-height:50px;
        color:#7d7d7d;
    }
    .right {
      float:right;
      height:80px;
      line-height:80px;
      font-size:14px;
      color:#8f8f8f;
      span{
        color:#de4133;
      }
      .logout{
        display:inline-block;
        color:blue;
        text-decoration: underline;
      }
      .logout:hover{
        color:red;
      }
    }
  }
}
</style>