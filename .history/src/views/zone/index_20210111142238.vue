<template>
  <div class="wrapper">
      <top></top>
      <div class="content">
        <div class="menuwrapper" >
          <div class="menu">
            <ul>
              <li>
                <span class="iconfont icon-gerenzhongxin"></span>个人中心
                <ul>
                  <router-link to="/zone/" tag="li">基本信息</router-link>
                  <router-link to="/zone/vip" tag="li">我的会员</router-link>
                  <router-link to="/zone/Password" tag="li">密码修改</router-link>
                  <!-- <router-link to="/zone/pwdset" tag="li">安全密保</router-link> -->
                  <!-- <router-link to="/zone/realnameauth" tag="li">实名认证</router-link> -->
                </ul>
              </li>
              <li>
                <span class="iconfont icon-icon-dingdan"></span> 订单管理
                <ul>
                  <router-link to="/zone/entrustorder" tag="li">检测订单</router-link>
                </ul>
              </li>
              <li>
                <span class="iconfont icon-icon-dingdan"></span>数据申请
                <ul>
                  <router-link to="/zone/dataapply" tag="li">查看申请</router-link>
                </ul>
              </li>
              <li>
                <span class="iconfont icon-menpiaoshezhi"></span> 发票管理
                <ul>
                  <router-link to="/zone/invoicetitle" tag="li">抬头管理</router-link>
                  <router-link to="/zone/viewinvoice" tag="li">查看发票</router-link>

                  <router-link to="/zone/applyinvoice" tag="li">申请发票</router-link>
                </ul>
              </li>
              <li>
                <span class="iconfont icon-dizhi1"></span> 地址管理
                <ul>
                <router-link to="/zone/addresslist" tag="li">地址列表</router-link>
                </ul>
              </li>  
            </ul> 
          </div>     
        </div>
        <div class="mainwrapper">
          <div class="main">
            <router-view ></router-view>
          </div>
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
.router-link-exact-active.router-link-active{
  font-weight: bold;
  color:red !important;
}

.wrapper{
  background:#f7f7f7;
  min-height:100%;
  .content {
    padding: 30px 0;
    display: flex;
    justify-content:space-between;
    overflow: hidden;
    width:1164px;
    position: relative;
    left:0;
    right:0;
    margin: 0 auto;
    min-height:100vh;
    
    .menuwrapper{
      width:190px;
      overflow: hidden;
      border:1px solid #dadada;
      .menu{
        padding:30px;
        background:#fff;
        ul{
          // background:green;
          
          // background:#fff;
          color:#999;
          li {
            line-height:40px;
            color:#333;
            .iconfont{
              font-size:22px;
              display:inline-block;
              width:24px;
              height:30px;
            }
            ul{
              padding:0 15px;
              overflow: hidden;

              li {
                // background:red;
                height:30px;
                line-height:30px;
                color:#999;
                font-size:14px;
              }
              li:hover {
                cursor:pointer;
              }
              li.router-link-exact-active.router-link-active{
                font-weight: bold;
                color:red ;
              }
            }
          }
        }
      }
    }
    .mainwrapper{
      width:950px;
      display: block; 
      border:1px solid #dadada;
      .main{
        min-width:100%;
        min-height:100%;
        background:#fff;
      }

    }
  }
}

</style>