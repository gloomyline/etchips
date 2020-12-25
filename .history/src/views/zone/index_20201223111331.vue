<template>
  <div class="wrapper">
      <top></top>
      <div class="content">
        <div class="nenu" style="background:red;">
          <ul>
            <router-link to="/zone/userinfo" tag="li">基本信息</router-link>
            <router-link to="/zone/userinfo" tag="li">222</router-link>
            <router-link to="/zone/Password" tag="li">222</router-link>
           
            
          </ul>
          <router-view ></router-view>
        </div>
        <!-- <div class="main">
          asdfasdf
          
        </div> -->

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