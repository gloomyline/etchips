<template>
  <div class="topwrapper">
    <div class="top">
      <div class="logo">| 个人中心</div>
      <div class="right"> 欢迎你，<span>{{uid}}</span>   |   退出登录</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      // uid:""
    }
  },
  computed:{
    uid:function(){
      return this.$store.state.uid
    }
  },
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
    }
  }
}
</style>