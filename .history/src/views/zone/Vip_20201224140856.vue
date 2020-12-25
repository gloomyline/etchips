<template>
  <div class="contentwrapper">
    <div class=banner>
      <div class="info">
        Hi，甜橙<br>
        你的身份：VIP会员<br>
        到期时间：2020-11-30
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
        span{
          color:yellow;
        }
      }
    }
  }
</style>
