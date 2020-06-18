<template lang="html">
  <div class="et-nav">
    <div class="et-nav-wrap" :class="{'has-prefix': hasPrefix}">
      <div class="prefix" v-if="hasPrefix">
        <img class="logo" src="./icon-et-logo.png" width="258" height="64">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img class="flag" src="./icon-china-flag.png" width="30" height="30">
            <i class="el-icon-caret-bottom el-icon--right angel"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中国</el-dropdown-item>
            <el-dropdown-item>美国</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="nav-with-login">
        <ul class="nav-links">
          <li class="nav-link"><router-link :class="classMap('Home')" to="/">首页</router-link></li>
          <li class="nav-link"><router-link :class="classMap('Detect')" to="/detect">委托检测</router-link></li>
          <li class="nav-link"><router-link :class="classMap('Customer')" to="/customerService">客户服务</router-link></li>
          <li class="nav-link"><router-link :class="classMap('Factory')" to="/factoryService">原厂服务</router-link></li>
        </ul>
        <div class="btn-login">
          <span class="label">注册/登录</span>
          <div class="icon-wrap"><i class="el-icon-user"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtNav',
  props: {
    hasPrefix: Boolean,
  },
  methods: {
    classMap(routeName) {
      const currentRouteName = this.$route.name;
      if (routeName === 'Home' && (currentRouteName === 'SearchResults' || currentRouteName === 'GoodDetails')) {
        return { active: true };
      }
      return { active: routeName === this.$route.name };
    },
  },
};
</script>

<style lang="stylus" scoped>
.et-nav
  color: $white
  background-color: $black
  .et-nav-wrap
    display: flex
    width: 80%
    margin: 0 auto
    &.has-prefix
      padding-top: 70px
    .prefix
      height: 64px
      .logo
        vertical-align: middle
        margin-right: 64px
    .nav-with-login
      display: flex
      margin: 0 auto
      .nav-links
        display: flex
        margin-right: 68px
        a
          display: inline-block
          width: 102px
          height: 64px
          line-height: 64px
          text-align: center
          font-size: 18px
          color: $text-grey
          text-decoration: none
          &.active
            font-size: 20px
            color: $white
      .btn-login
        width: 176px
        height: 50px
        padding-left: 32px
        margin-top: 7px
        border-radius: 25px 25px
        background-color: $red
        .label
          display: inline-block
          line-height: 50px
        .icon-wrap
          display: inline-block
          vertical-align: top
          width: 42px
          height: 42px
          line-height: 42px
          text-align: center
          margin-top: 4px
          margin-left: 20px
          border-radius: 50%
          background-color: $red2
</style>

<style lang="stylus">
.et-nav
  .el-dropdown
    vertical-align: middle
    cursor: pointer
    .flag, .angel
      display: inline-block
      vertical-align: middle
</style>
