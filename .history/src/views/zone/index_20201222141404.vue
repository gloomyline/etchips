<template>
  <div class="wrapper">
      <top></top>
      <div class="content">
        <div class="nenu">菜单</div>
        <div class="main">你要的内容</div>

      </div>

  </div>
</template>
<script>
import top from "./top.vue"
export default {
  components:{"top"},
  
}
</script>
<style lang="scss" scoped>
.wrapper {
  .top{
    height:80px;
    // background:red;
    box-shadow:1px 1px 8px #888888;
    .logo{
        float:left;
        background:url(../../common/images/logo.jpg);
        width:137px;
        height:35px;
        margin-top:20px;
    }
    .right {
      
    }
  }
}

</style>