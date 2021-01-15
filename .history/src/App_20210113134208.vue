<template>
  <div id="app">
    <router-view></router-view>
    <el-dialog
      title="对比栏"
      :visible.sync="isShown"
      width="80%"
      :modal="false"
      top="0"
      :lock-scroll="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      custom-class="contrast-bar"
    >
      <ul class="contrast-list">
        <li class="contrast-item" v-for="contrast in contrasts" :key="contrast.materialNumber">
          <div class="img-wrap"><img class="material-img" :src="contrast.imgUrl" width="64" height="64"></div>
          <div class="content">
            <h3 class="material-number">{{ contrast.materialNumber }}</h3>
            <el-button type="text" @click="delHandler(contrast.materialNumber)">删除</el-button>
          </div>
        </li>
        <li class="operates">
          <div class="btn-contrast-wrap"><el-button :disabled="contrasts.length <= 1" class="btn-contrast" type="primary" @click="contrastHandler">对比</el-button></div>
          <el-button class="btn-clear" type="text" @click="clearHandler">清空所有</el-button>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    isShown: {
      get() {
        return this.$store.state.contrastBarIsShown;
      },
      set() {
        this.$store.commit('hideContrastBar');
      },
    },
    contrasts() {
      return this.$store.state.contrasts;
    },
  },
  created() {
    //全局监听，页面刷新的时候将store里state的值存到sessionStorage中，然后从sessionStorage中获取，再赋值给store。然后再把session里面存的删除即可，相当于中间件的作用。
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
      sessionStorage.removeItem("store")
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  methods: {
    delHandler(materialNumber) {
      this.$store.commit('delContrast', materialNumber);
    },
    contrastHandler() {
      this.$store.dispatch('fetechContrastives');
      this.$router.push({ name: 'ContrastDetails' });
      this.$store.commit('hideContrastBar');
    },
    clearHandler() {
      this.$store.commit('clearContrasts');
      this.$store.commit('hideContrastBar');
    },
  },
};
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  width: 100%
  min-width: $screen-width
  margin: 0 auto
  & > .el-dialog__wrapper
    pointer-events: none !important
  .contrast-bar
    position: absolute !important
    left: 50%
    bottom: 8px
    transform: translateX(-50%)
    height: 160px
    margin-bottom: 0 !important
    pointer-events: all
    .el-dialog__body
      padding: 0
    .contrast-list
      display: flex
      padding: 10px 0
      position: relative
      .contrast-item
        flex: 1
        height: 100%
        .img-wrap, .content
          height: 100%
          display: inline-block
          vertical-align: top
          padding: 10px
        .content
          text-align: right
      .operates
        absolute: right top
        width: 160px
        text-align: right
        margin-right: 8px
</style>
