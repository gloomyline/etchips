<template>
  <div class="contentwrapper">
    <div class="banner">
      <div class="info">
        Hi，甜橙<br>
        你的身份：<span>VIP会员</span><br>
        到期时间：2020-11-30
      </div>
    </div>
    <div class="container">
      <div class="title">
        <span class="iconfont icon-tubiao-shufu"></span>开通会员
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .contentwrapper{
    .banner {
      background: url('../../assets/zone/vipbanner.jpg');
      width:950px;
      height:142px;
      .info{
        color:#fff;
        line-height:20px;
        padding:35px;
        span{
          color:yellow;
          font-weight:bold;
        }
      }
    }
    .container{
      .title{
        font-size:24px;
        margin:30px 0 0 20px;
        color:#272626;
        .iconfont{
          color:#ff5b6c;
          font-size:24px;
          display: inline-block;
          width:30px;
        
        }
      }
    }
  }
</style>
