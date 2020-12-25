<template>
  <div class="wrapper">
      <top></top>
      <div class="content">
        <div class="menu" >
          <ul>
            <li>
              个人中心
              <ul>
                <router-link to="/zone/" tag="li">基本信息</router-link>
                <router-link to="/zone/vip" tag="li">我的会员</router-link>
                <router-link to="/zone/Password" tag="li">密码修改</router-link>
                <router-link to="/zone/pwdset" tag="li">安全密保</router-link>
                <router-link to="/zone/realnameauth" tag="li">实名认证</router-link>
              </ul>
            </li>
            <li>
              订单管理
              <ul>
                <router-link to="/zone/entrustorder" tag="li">检测订单</router-link>
              </ul>
            </li>
            <li>
              发票管理
              <ul>
                <router-link to="/zone/viewinvoice" tag="li">查看发票</router-link>
                <router-link to="/zone/applyinvoice" tag="li">申请发票</router-link>
              </ul>
            </li>
            <li>
              地址管理
              <ul>
               <router-link to="/zone/addresslist" tag="li">地址列表</router-link>
              </ul>
            </li>  
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
  .content {
    padding: 30px 0;
    display: flex;
    width:1164px;
    position: relative;
    left:0;
    right:0;
    margin: 0 auto;
    min-height:100vh;
    .menu{
      width:200px;
      display: block;
      // background:red;
      ul{
        // background:green;
        
        // background:#fff;
        color:#999;
        padding:30px 15px 30px 0;
        li {
          line-height:40px;
          background:#fff;
          padding-left:15px;
          ul{
            padding:0 20px;
            overflow: hidden;

            li {
              background:red;
              height:30px;
              line-height:30px;
            }
          }
        }
      }
    }
    .main{
      flex:1;
      width:964px;
      background:#fff;
      padding: 0 30px;
    }
  }
}
</style>