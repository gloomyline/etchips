<template>
  <div class="wrapper">
      <top></top>
      <div class="content">
        <div class="nenu" style="background:red;">
          <ul>
            <router-link to="/" tag="li">基本信息</router-link>
            <router-link to="/zone/vip" tag="li">我的会员</router-link>
            <router-link to="/zone/Password" tag="li">密码修改</router-link>
            <router-link to="/zone/pwdset" tag="li">安全密保</router-link>
            <router-link to="/zone/realnameauth" tag="li">实名认证</router-link>

            <router-link to="/zone/entrustorder" tag="li">检测订单</router-link>

            <router-link to="/zone/viewinvoice" tag="li">查看发票</router-link>
            <router-link to="/zone/applyinvoice" tag="li">申请发票</router-link>

            <router-link to="/zone/addresslist" tag="li">地址列表</router-link>

           
            
          </ul>
          
        </div>
        <div class="main">
          <router-view ></router-view>
          
        </div>

      </div>

  </div>
</template>
<script>
import top from "./top.vue"
export default {
  components:{top},
  
}
</script>
<style lang="scss" scoped>
.wrapper{
  background:#f7f7f7;
  min-height:100%;
}
</style>