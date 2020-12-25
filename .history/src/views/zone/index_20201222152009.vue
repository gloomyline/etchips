<template>
  <div class="wrapper">
      <top></top>
      <div class="content">
        <div class="nenu">
          <router-link to="/userinfo">基本信息</router-link>
        </div>
        <div class="main">
          asdfasdf
          <router-view></router-view>
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