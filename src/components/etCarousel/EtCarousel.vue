<template lang="html">
  <div class="et-carousel">
    <div class="carousel-wrap">
      <div class="suspend">
        <h2 class="title" @click="gotoSearchResults">即刻了解任何电子芯片</h2>
        <el-input class="search" suffix-icon="el-icon-search" placeholder="请输入产品料号"></el-input>
        <div class="material-upload">
          <span class="btn-upload" @click="selectFile">上传物料清单</span>
          <input ref="file" type="file" name="file" hidden>
          <p class="tip">请从本地上传您的BOM以获得芯片的详细资料（接受格式：.csv,.tsv,.xls,.xlsx,Eagle,.sch,KiCad.sch,.SchDoc）</p>
        </div>
      </div>
      <el-carousel height="360px" arrow="always" :autoplay="false">
        <el-carousel-item v-for="(item, index) in carouselData" :key="index">
          <div class="img-wrap"><img :src="item"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtCarouse',
  props: {
    carouselData: {
      type: Array,
      default() {
        /* eslint-disable global-require */
        return [require('./img-carousel-demo.png'), require('./img-carousel-demo.png'), require('./img-carousel-demo.png')];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    gotoSearchResults() {
      this.$router.push({ name: 'SearchResults' });
    },
  },
};
</script>

<style lang="stylus" scoped>
.et-carousel
  position: relative
  height: 240px
  background-color: $black
  .carousel-wrap
    position: absolute
    left: 50%
    top: 20px
    width: 70%
    transform: translateX(-50%)
    .suspend
      absolute: left 190px top
      padding-top: 48px
      z-index: 10
      .title
        margin-bottom: 24px
        font-size: 28px
        font-weight: bold
        color: $white
      .material-upload
        padding-top: 40px
        color: $white
        font-size: 0
        cursor: pointer
        .btn-upload
          display: inline-block
          vertical-align: top
          width: 170px
          height: 36px
          line-height: 36px
          text-align: center
          margin-right: 16px
          font-size: 18px
          border: 1px dashed $white
          border-radius: 4px 4px
        .tip
          display: inline-block
          vertical-align: top
          width: 376px
          line-height: 1.4em
          font-size: 14px
</style>

<style lang="stylus">
.et-carousel
  .el-carousel
    overflow: hidden
    .el-carousel__container .el-carousel__item
      .img-wrap
        position: relative
        width: 100%
        height: 100%
        img
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          margin: auto
    .el-carousel__arrow
      &:hover
        background-color: $blue
    .el-carousel__arrow--left
      left: 220px
      top: 280px
    .el-carousel__arrow--right
      left: 298px
      top: 280px
    .el-carousel__indicators
      left: 96px
      bottom: 50%
      transform: translateY(50%)
      .el-carousel__indicator
        display: block
        padding: 8px 4px
        .el-carousel__button
          width: 12px
          height: 12px
          border-radius: 50%
  .el-input
    width: 520px
    input
      height: 48px
      font-size: 18px
      border-radius: 24px 24px
    .el-input__suffix
      right: 10px
    .el-input__icon
      line-height: 48px
      font-size: 24px
</style>
