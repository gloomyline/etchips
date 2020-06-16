<template lang="html">
  <div class="et-carousel">
    <div class="carousel-wrap">
      <div class="suspend">
        <h2 class="title">即刻了解任何电子芯片</h2>
        <el-input class="search" suffix-icon="el-icon-search" placeholder="请输入产品料号"></el-input>
        <div class="material-upload">
          <span class="btn-upload" @click="selectFile">上传物料清单</span>
          <input ref="file" type="file" name="file" hidden>
          <p class="tip">请从本地上传您的BOM以获得芯片的详细资料（接受格式：.csv,.tsv,.xls,.xlsx,Eagle,.sch,KiCad.sch,.SchDoc）</p>
        </div>
      </div>
      <el-carousel height="580px" arrow="always" :autoplay="false">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <img :src="item" width="100%" height="580px">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtCarouse',
  data() {
    /* eslint-disable global-require */
    const img = require('./img-carousel-demo.png');
    return {
      imgs: [img, img, img],
    };
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
  },
};
</script>

<style lang="stylus" scoped>
.et-carousel
  position: relative
  height: 614px
  background-color: $black
  .carousel-wrap
    position: absolute
    left: 50%
    top: 100px
    width: 80%
    transform: translateX(-50%)
    .suspend
      absolute: left 274px top
      padding-top: 104px
      z-index: 10
      .title
        margin-bottom: 52px
        font-size: 42px
        font-weight: bold
        color: $white
      .material-upload
        margin-top: 40px
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
          font-size: 20px
          border: 1px dashed $white
          border-radius: 4px 4px
        .tip
          display: inline-block
          vertical-align: top
          width: 476px
          line-height: 1.2em
          font-size: 16px
</style>

<style lang="stylus">
.et-carousel
  .el-carousel
    .el-carousel__arrow
      &:hover
        background-color: $blue
    .el-carousel__arrow--left
      left: 280px
      top: 437px
    .el-carousel__arrow--right
      left: 359px
      top: 437px
    .el-carousel__indicators
      left: 132px
      top: 104px
      .el-carousel__indicator
        display: block
        padding: 10px 4px
        .el-carousel__button
          width: 12px
          height: 12px
          border-radius: 50%
  .el-input
    width: 608px
    input
      height: 80px
      font-size: 28px
      border-radius: 36px 36px
    .el-input__suffix
      right: 20px
    .el-input__icon
      line-height: 80px
      font-size: 36px
</style>
