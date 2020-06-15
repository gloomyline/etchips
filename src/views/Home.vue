<template>
  <div class="home">
    <et-header></et-header>
    <et-nav has-prefix></et-nav>
    <et-carousel></et-carousel>
    <div class="et-module-nav">
      <ul class="modules">
        <li class="module"><a href="#"><img src="@/assets/icon-detect.png" class="icon" width="64" height="64"><p class="label">物料验真</p></a></li>
        <li class="module"><a href="#"><img src="@/assets/icon-files-download.png" alt="" class="icon" width="64" height="64"><p class="label">报告下载</p></a></li>
        <li class="module"><a href="#"><img src="@/assets/icon-customer-define.png" alt="" class="icon" width="64"><p class="label">用户定制</p></a></li>
      </ul>
    </div>
    <div class="know-more">
      <img src="@/assets/img-chip.png" width="268" height="156">
      <div class="more-box">
        <h2 class="title">文字文字</h2>
        <h3 class="sub-title">副标题副标题副标题副标题副副标题副标题副标题副标题副标题副标题副标题副标题标题副标题副标题副标题副标题副标题副标题副标题</h3>
        <div class="btn-more">了解更多</div>
      </div>
    </div>
    <div class="hot-search">
      <h2 class="title">热门物料检索</h2>
      <div class="search-wrap">
        <el-container>
          <el-aside class="search-left" width="320px">
            <el-carousel height="864px" trigger="click" arrow="never">
              <el-carousel-item v-for="(item, index) in pics" :key="index">
                <img :src="item.img">
                <h4 class="title">{{ item.title }}</h4>
                <p class="desc">{{ item.desc }}</p>
              </el-carousel-item>
            </el-carousel>
          </el-aside>
          <el-aside class="search-right" width="1024px">
            <ul class="materials">
              <li class="material" v-for="(item, index) in materials" :key="index">
                <img :src="item.icon" alt="">
                <h4 class="title">LMNOWMS3I</h4>
                <p class="sub-title">检测次数</p>
                <p class="detect-count">{{ item.count }}</p>
              </li>
            </ul>
          </el-aside>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
import EtCarousel from '@/components/etCarousel/EtCarousel';
/* eslint-disable */
const MATERIALS = [
  {
    icon: require('@/assets/icon-chip-1.png'),
    count: '131，273',
  },
  {
    icon: require('@/assets/icon-chip-2.png'),
    count: '705，172',
  },
  {
    icon: require('@/assets/icon-chip-3.png'),
    count: '3350',
  },
  {
    icon: require('@/assets/icon-chip-4.png'),
    count: '131，273',
  },
  {
    icon: require('@/assets/icon-chip-5.png'),
    count: '705，172',
  },
  {
    icon: require('@/assets/icon-chip-6.png'),
    count: '3350',
  },
  {
    icon: require('@/assets/icon-chip-7.png'),
    count: '131，273',
  },
  {
    icon: require('@/assets/icon-chip-8.png'),
    count: '705，172',
  },
  {
    icon: require('@/assets/icon-chip-9.png'),
    count: '3350',
  },
]
/* eslint-enable */
export default {
  name: 'Home',
  data() {
    const pics = [];
    /* eslint-disable no-plusplus */
    for (let i = 0; i < 4; ++i) {
      const pic = {
        /* eslint-disable global-require */
        img: require('@/assets/img-carousel-demo.png'),
        title: '文字',
        desc: '文字文文字文字文字字',
      };
      pics.push(pic);
    }
    return {
      pics,
      materials: MATERIALS,
    };
  },
  components: { EtCarousel },
};
</script>

<style lang="stylus" scoped>
.home
  .et-module-nav
    width: $screen-width
    height: 386px
    padding-top: 114px
    margin-bottom: 60px
    border-bottom: 2px solid $grey2
    .modules
      display: flex
      justify-content: space-between
      width: $middle-width
      margin: 0 auto
      .module
        width: 426px
        height: 214px
        text-align: center
        padding-top: 22px
        border-radius: 16px
        box-shadow: 4px 8px 10px $grey2
        & > a
          display: block
          width: 100%
          height: 100%
          text-decoration: none
        .icon
          margin-bottom: 34px
        .label
          color: $black
          font-size: 30px
          font-weight: 700
  .know-more
    position: relative
    width: $middle-width
    margin: 0 auto
    padding: 36px 0 26px 170px
    margin-bottom: 78px
    background-image: url('../assets/bg-sub-title.png')
    background-size: 100% 100%
    background-position: cover
    background-repeat: no-repeat
    .more-box
      absolute: right top -20px
      width: 738px
      height: 262px
      padding: 78px 0 0 172px
      background-image: url('../assets/img-trapezoid-box.png')
      background-size: 100% 100%
      .title
        font-weight: 600
        font-size: 24px
        margin-bottom: 18px
      .sub-title
        width: 292px
        font-size: 20px
        color: $grey3
      .btn-more
        absolute: right 86px bottom 48px
        width: 112px
        height: 34px
        line-height: 34px
        text-align: center
        cursor: pointer
        border-radius: 4px 4px
        border: 1px solid $black
  .hot-search
    .title
      text-align: center
      font-size: 34px
      font-weight: medium
      margin-bottom: 66px
    .search-wrap
      width: $middle-width
      margin: 0 auto
      .search-left
        margin-right: 32px
      .materials
        display: flex
        flex-wrap: wrap
        width: 1024px
        .material
          width: 320px
          height: 260px
          margin: 0 30px 40px 0
          padding-top: 46px
          text-align: center
          cursor: pointer
          border-radius: 8px 8px
          &:hover
            box-shadow: 2px 8px 8px #cccccc
          &:nth-child(3n)
            margin-right: 0
          & > img
            margin-bottom: 34px
          .title
            font-size: 18px
            margin-bottom: 14px
          .sub-title,.detect-count
            font-size: 16px
            color: $grey4
            line-height: 1.6em
</style>

<style lang="stylus">
.home
  .search-left
    .el-carousel__item
      .title
        absolute: left 56px bottom 80px
        font-size: 24px
        color: $white
      .desc
        absolute: left 56px bottom 108px
        line-height: 1.2em
        font-size: 20px
        color: $grey3
</style>
