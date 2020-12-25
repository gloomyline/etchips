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
  components:{top},
  
}
</script>
<style lang="scss" scoped>
.wrapper{
  background:#f7f7f7;
  min-height:600px;
}
</style>