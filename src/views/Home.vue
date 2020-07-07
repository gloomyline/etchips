<template>
  <div class="home">
    <et-header></et-header>
    <et-nav has-prefix></et-nav>
    <et-carousel :carousel-data="carouselData"></et-carousel>
    <div class="et-module-nav">
      <ul class="modules">
        <li class="module"><a href="#"><img src="@/assets/icon-detect.png" class="icon" width="64" height="64"><p class="label">物料验真</p></a></li>
        <li class="module"><a href="#"><img src="@/assets/icon-files-download.png" alt="" class="icon" width="64" height="64"><p class="label">报告下载</p></a></li>
        <li class="module"><a href="#"><img src="@/assets/icon-customer-define.png" alt="" class="icon" width="64"><p class="label">用户定制</p></a></li>
      </ul>
    </div>
    <div class="know-more">
      <img src="@/assets/img-chip.png" width="168" height="90">
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
          <el-aside class="search-left" width="25%">
            <el-carousel height="580px" trigger="click" arrow="never">
              <el-carousel-item v-for="(item, index) in pics" :key="index">
                <img :src="item.img" width="100%" height="580">
                <h4 class="title">{{ item.title }}</h4>
                <p class="desc">{{ item.desc }}</p>
              </el-carousel-item>
            </el-carousel>
          </el-aside>
          <el-aside class="search-right" width="75%">
            <ul class="materials">
              <li class="material" v-for="(item, index) in materials" :key="index">
                <img :src="item.icon" alt="" width="56" height="48">
                <h4 class="title">LMNOWMS3I</h4>
                <p class="sub-title">检测次数</p>
                <p class="detect-count">{{ item.count }}</p>
              </li>
            </ul>
          </el-aside>
        </el-container>
      </div>
    </div>
    <div class="manufacturer">
      <ul class="summary">
        <li class="summary-item">
          <div class="icon-box"><img src="@/assets/icon-count.png" width="50" height="50" class="icon"></div>
          <p class="label">已有样品数量</p>
          <p class="count">15,000</p>
        </li>
        <li class="summary-item">
          <div class="icon-box"><img src="@/assets/icon-coperation.png" width="50" height="50" class="icon"></div>
          <p class="label">客户合作</p>
          <p class="count">2000+</p>
        </li>
        <li class="summary-item">
          <div class="icon-box"><img src="@/assets/icon-like.png" width="50" height="50" class="icon"></div>
          <p class="label">验真次数</p>
          <p class="count">3,000</p>
        </li>
      </ul>
      <div class="selected-ones">
        <h3 class="title">精选制造商</h3>
        <el-carousel arrow="always" trigger="click" height="160px" :loop="false" indicator-position="none">
          <el-carousel-item v-for="(selected, index) in selecteds" :key="index">
            <ul class="selected-list"><li class="selected-item" v-for="(item, idx) in selected" :key="idx"><img :src="item"></li></ul>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="contact-us">
      <h2 class="title">联系我们</h2>
      <div class="map-wrap">
        <img class="img-map" src="@/assets/img-map.png">
        <img class="icon-marker" src="@/assets/icon-marker.png" width="30" height="40">
      </div>
      <el-form style="padding-top: 20px; background: #F5F6FA;" label-position="left" label-width="80px" :model="form">
        <el-row :gutter="20" style="width: 80%;margin: 0 auto;">
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="建议">
              <el-input v-model="form.advice" type="textarea" maxlength="50" show-word-limit></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <et-footer></et-footer>
  </div>
</template>

<script>
import EtCarousel from '@/components/etCarousel/EtCarousel';
import api from '@/api';
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
    // simulate carousel in hot search
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
    // simulate carousel in manufacturer
    const selecteds = [];
    for (let i = 0; i < 3; i += 1) {
      const selected = [
        /* eslint-disable */
        require('@/assets/icon-kemet.png'),
        require('@/assets/icon-muruta.png'),
        require('@/assets/icon-tdk.png'),
        require('@/assets/icon-netsol.png'),
        /* eslint-enable */
      ];
      selecteds.push(selected);
    }
    return {
      carouselData: [],
      pics,
      selecteds,
      materials: MATERIALS,
      mapImg: null,
      form: {
        name: '',
        email: '',
        phone: '',
        advice: '',
      },
    };
  },
  components: { EtCarousel },
  async created() {
    const data = await api.home.fetchCarousels();
    this.carouselData = data.map((item) => item.path);
  },
};
</script>

<style lang="stylus" scoped>
.home
  .et-module-nav
    height: 346px
    padding-top: 158px
    margin-bottom: 40px
    border-bottom: 2px solid $grey2
    .modules
      display: flex
      justify-content: space-between
      width: 70%
      margin: 0 auto
      .module
        width: 240px
        height: 160px
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
          margin-bottom: 20px
        .label
          color: $black
          font-size: 24px
          font-weight: 700
  .know-more
    position: relative
    width: 70%
    height: 180px
    line-height: 180px
    margin: 0 auto
    padding-left: 64px
    padding-top: 42px
    margin-bottom: 40px
    background-image: url('../assets/bg-sub-title.png')
    background-size: 100% 100%
    background-position: cover
    background-repeat: no-repeat
    .more-box
      absolute: right top -20px
      width: 400px
      height: 220px
      padding-left: 60px
      padding-right: 20px
      background-image: url('../assets/img-trapezoid-box.png')
      background-size: 100% 100%
      .title
        height: 80px
        line-height: 80px
        font-weight: 600
        font-size: 20px
      .sub-title
        line-height: 1.2em
        font-size: 14px
        color: $grey3
      .btn-more
        absolute: right 48px bottom 32px
        width: 96px
        height: 28px
        font-size: 16px
        line-height: 28px
        text-align: center
        cursor: pointer
        border-radius: 4px 4px
        border: 1px solid $black
  .hot-search
    margin-bottom: 68px
    .title
      text-align: center
      font-size: 28px
      margin-bottom: 48px
    .search-wrap
      width: 70%
      margin: 0 auto
      .search-left
        margin-right: 20px
      .materials
        display: flex
        flex-wrap: wrap
        .material
          width: 210px
          height: 180px
          margin: 0 10px 20px 0
          padding-top: 16px
          text-align: center
          cursor: pointer
          border-radius: 8px 8px
          &:hover
            box-shadow: 2px 8px 8px #cccccc
          &:nth-child(3n)
            margin-right: 0
          & > img
            margin-bottom: 14px
          .title
            font-size: 18px
            margin-bottom: 14px
          .sub-title,.detect-count
            font-size: 16px
            color: $grey4
            line-height: 1.6em
  .manufacturer
    position: relative
    width: 100%
    height: 400px
    margin-bottom: 120px
    background-color: $black
    .summary
      display: flex
      justify-content: space-between
      width: 70%
      margin: 0 auto
      padding: 72px 0 0 0
      .summary-item
        text-align: center
        &:last-child
          margin-right: 0
        .icon-box
          width: 96px
          height: 96px
          padding-top: 23px
          margin-bottom: 32px
          border-radius: 50% 50%
          background-color: #3F4955
        .label
          line-height: 30px
          color: $white
          font-size: 16px
        .count
          color: $white
          font-size: 30px
    .selected-ones
      position: absolute
      width: 80%
      height: 208px
      left: 50%
      bottom: -120px
      transform: translateX(-50%)
      background-image: url('../assets/bg-carousel.png')
      background-size: 100% 100%
      background-repeat: no-repeat
      background-position: cover
      .title
        padding-top: 16px
        padding-bottom: 8px
        font-size: 24px
        text-align: center
        color: $white
      .selected-list
        display: flex
        justify-content: space-around
        align-items: center
        height: 160px
  .contact-us
    width: 100%
    .title
      text-align: center
      padding-top: 66px
      padding-bottom: 58px
      font-size: 32px
    .map-wrap
      position: relative
      width: 100%
      .img-map
        width: 100%
      .icon-marker
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%, 0)
        width: 30px
        height: 40px
</style>

<style lang="stylus">
.home
  .search-left
    .el-carousel__item
      .title
        absolute: left 56px bottom 60px
        font-size: 24px
        color: $white
      .desc
        absolute: left 56px bottom 60px
        width: 160px
        line-height: 1.2em
        font-size: 18px
        color: $grey3
    .el-carousel__indicators
      .el-carousel__button
        width: 10px
</style>
