<template lang="html">
  <div class="et-footer">
    <el-row>
      <el-col :span="5">
        <img class="logo" src="@/assets/icon-etfooter-logo.png" width="180">
        <div class="icon-wrap">
          <img src="@/assets/icon-weibo.png" width="34" height="26" alt="">
          <img src="@/assets/icon-wechat.png" width="34" height="26" alt="">
          <img src="@/assets/icon-qq.png" width="34" height="26" alt="">
        </div>
        <p class="copyright">© ET Chips. All Rights Reserved.</p>
        <p class="website">www.etchips.com</p>
      </el-col>
      <el-col class="links" :span="5">
        <h3 class="title">公司</h3>
        <ul>
          <li><a href="#">关于</a></li>
          <li><a href="#">招贤纳士</a></li>
          <li><a href="#">联系</a></li>
          <li><a href="#">成功案例</a></li>
        </ul>
      </el-col>
      <el-col class="links" :span="5">
        <h3 class="title">帮助中心</h3>
        <ul>
          <li><a href="#">关于</a></li>
          <li><a href="#">版本更新</a></li>
          <li><a href="#">登录系统</a></li>
          <li><a href="#">产品咨询</a></li>
        </ul>
      </el-col>
      <el-col class="links" :span="5">
        <h3 class="title">条款</h3>
        <ul>
          <li><a href="#">隐私政策</a></li>
          <li><a href="#">隐私政策</a></li>
        </ul>
      </el-col>
      <el-col :span="4" class="clear-fix">
        <div class="wrap" style="width: 160px;float: right;text-align: center;">
          <img class="qr" src="@/assets/img-qr.png" width="146" height="146" alt="">
          <img src="@/assets/icon-star.png" alt="" class="icon-star" width="26" height="26">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'EtFooter',
};
</script>

<style lang="stylus">
.et-footer
  width: 80%
  margin: 0 auto
  padding-top: 64px
  padding-bottom: 32px
  .logo
    transform: translate3d(-24px, -20px, 0)
  .icon-wrap
    margin-bottom: 20px
    transform: translateY(-12px)
    & > img
      margin-right: 32px
  .copyright, .website
    line-height: 1.2em
    font-size: 14px
    color: #A8B5C4
  .links
    padding-left: 80px
    .title
      margin-bottom: 10px
      font-size: 24px
      color: #000000
    a
      display: block
      line-height: 1.5em
      font-size: 18px
      color: #A8B5C4
      text-decoration: none
</style>
