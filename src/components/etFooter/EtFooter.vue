<template lang="html">
  <div class="et-footer">
    <el-row :gutter="10">
      <el-col :span="5">
        <img src="@/assets/icon-etfooter-logo.png" width="220" height="52">
        <div class="icon-wrap">
          <img src="@/assets/icon-weibo.png" width="34" height="26" alt="">
          <img src="@/assets/icon-wechat.png" width="34" height="26" alt="">
          <img src="@/assets/icon-qq.png" width="34" height="26" alt="">
        </div>
        <p>© ET Chips. All Rights Reserved.</p>
        <p>www.etchips.com</p>
      </el-col>
      <el-col :span="5">
        <h3 class="title">公司</h3>
        <ul>
          <li><a href="#">关于</a></li>
          <li><a href="#">招贤纳士</a></li>
          <li><a href="#">联系</a></li>
          <li><a href="#">成功案例</a></li>
        </ul>
      </el-col>
      <el-col :span="5">
        <h3 class="title">帮助中心</h3>
        <ul>
          <li><a href="#">关于</a></li>
          <li><a href="#">版本更新</a></li>
          <li><a href="#">登录系统</a></li>
          <li><a href="#">产品咨询</a></li>
        </ul>
      </el-col>
      <el-col :span="5">
        <h3 class="title">条款</h3>
        <ul>
          <li><a href="#">隐私政策</a></li>
          <li><a href="#">隐私政策</a></li>
        </ul>
      </el-col>
      <el-col :span="4">
        <!-- <img src="@/assets/img-qr-demo.png" width="146" height="146" alt=""> -->
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
</style>
