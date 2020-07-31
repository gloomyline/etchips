<template lang="html">
  <div class="material-detail">
    <et-nav @logout="updateUserStatus" @login="updateUserStatus"></et-nav>
    <et-search-box></et-search-box>
    <div id="material-top-image" class="material-top-image">
      <div class="top-image"></div>
    </div>

    <div class="material-container">
      <div class="material-top">基本信息</div>
      <div class="material-bottom">
        <div class="material-bottom-left">
          <div class="material-bottom-left-container"><img src="@/assets/img-chip.png" width="360" height="200"></div>
        </div>
        <div class="material-bottom-right">
          <div class="material-bottom-right-container">
            <p class="desc1">{{ material.brand && material.brand.brandName }}</p>
            <p class="desc2">{{ material.supplier && material.supplier.supplierName }}</p>
            <p class="desc3">{{ material.materialNumber }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="material-container hsBottom">
      <div class="material-top">产品说明</div>
      <div class="material-bottom">
        <div class="material-bottom-left">
          <div class="wrap inline-center">
            <h3 class="title">产品规格说明书</h3>
            <a v-for="item in material.products" @click.prevent="previewProduct(item.view)" :key="item.id" class="product">{{ item.title }}</a>
          </div>
        </div>
        <div class="material-bottom-right">
          <div class="wrap inline-center">
            <h3 class="title">pcn列表</h3>
            <a v-for="item in material.specificats" @click.prevent="previewSpecification(item.view)" :key="item.id" class="specification">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="materialList">
      <div class="material" v-for="material in materials" :key="material.id">
        <p class="dc-and-coo">
          <span class="dc">DC: {{ material.dc }}</span>
          <span class="coo">COO: {{ material.coo }}</span>
        </p>
        <div class="pictures">
          <div class="not-vip pictures-a">
            <button class="el-carousel__arrow carousel-previous" @click="previous"><i class="el-icon-caret-left"></i></button>
            <button class="el-carousel__arrow carousel-next" @click="next"><i class="el-icon-caret-right"></i></button>
            <ul class="materials">
              <li class="material" v-for="item in material.picturesA" :key="item.id"><div class="img-wrap"><img :src="item.path"></div></li>
            </ul>
          </div>
          <div class="pictures-b">
            <div class="not-vip" v-if="isAuthed">
              <button class="el-carousel__arrow carousel-previous" @click="previous"><i class="el-icon-caret-left"></i></button>
              <button class="el-carousel__arrow carousel-next" @click="next"><i class="el-icon-caret-right"></i></button>
              <ul class="materials">
                <li class="material" v-for="item in material.picturesB" :key="item.id"><div class="img-wrap"><img :src="item.path"></div></li>
              </ul>
            </div>
            <div class="need-vip" v-else><img src="@/assets/img-vip-chips.png"></div>
          </div>
        </div>
      </div>
    </div>
    <et-footer></et-footer>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'MaterialDetail',
  data() {
    return {
      material: {},
      materials: [],
      isAuthed: false,
    };
  },
  created() {
    this.fetchMaterial();
    this.updateUserStatus();
  },
  methods: {
    async fetchMaterial() {
      const payload = {
        brandName: this.$route.query.brandName,
        materialNumber: this.$route.query.materialNumber,
      };
      this.materials = await api.home.fetchMaterial(payload);
      /* eslint-disable prefer-destructuring */
      this.material = this.materials[0];
    },
    previewProduct(view) {
      window.open(view, '_blank');
    },
    previewSpecification(view) {
      window.open(view, '_blank');
    },
    previous() {
    },
    next() {
    },
    updateUserStatus() {
      this.isAuthed = !!(this.$utils.cookie.get('token'));
    },
  },
};
</script>

<style lang="stylus">
.material-top-image
  width: 100%;
  height: 360px;
  position: relative;
  z-index: -1;
  background-color: rgb(40,50,60);
  font-size: 0;
  .top-image
    display: block;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    background-size: 100% 100%;
    background-image:url('../assets/bg_materialDetail.png')

.material-container
  position: relative;
  color: #000;
  width: 100%;
  height: 400px
  .material-top
    position: absolute;
    left: 0;
    top: 30px;
    background: rgb(40,50,60);
    color: #fff;
    width: 150px;
    height: 40px;
    line-height: 40px;
    z-index: 100;
    text-align: center;
    font-weight: bold;
  .material-bottom
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;
    background: rgb(245,246,250);
    z-index: 80;
    .wrap
      width: 360px
      height: 240px
      .title
        font-size: 24px
        font-weight: bold
        margin-bottom: 20px
      .product,.specification
        display: block
        margin-bottom: 10px
        font-size: 16px
        font-weight: normal
        color: $grey
        text-decoration: underline
        cursor: pointer
    .material-bottom-left
      display: flex
      justify-content: center
      align-items: center
      float: left;
      width: 50%;
      height: 100%;
    .material-bottom-right
      display: flex
      justify-content: center
      align-items: center
      float: right;
      width: 50%;
      height: 100%;
      position: relative
    .material-bottom-right-container
      position: absolute;
      left: 50%;
      top: 50%;
      height: 80%;
      width: 100%;
      transform: translateX(-50%) translateY(-50%);
      .desc1
        color: #333333;
        font-size: 20px;
        padding: 10px 0 5px 20px;
      .desc2
        color: rgb(247,53,89);
        font-size: 36px;
        padding: 0 0 0 20px;
        font-font-weight: bold;
      .desc3
        margin-top: 60px;
        color: #333333;
        font-size: 26px;
        padding: 0 0 5px 20px;
.materialList
  width: 80%
  margin: 30px auto 0 auto
  .material
    .dc-and-coo
      width: 100%
      font-size: 16px
      font-weight: bold
      margin-bottom: 10px
      .dc
        margin-right: 20px
  .need-vip > img
    width: 100%
  .not-vip
    position: relative
    width: 100%
    margin-bottom: 20px
    .carousel-next
      absolute: right -70px top 70px
      height: 64px
      width: 64px
      font-size: 64px
      color: $grey2
      background: transparent
    .carousel-previous
      absolute: left -70px top 70px
      width: 64px
      height: 64px
      font-size: 64px
      color: $grey2
      background: transparent
    .materials
      display: flex
      width: 100%
      overflow-x: auto
      padding: 20px 0
      .material
        flex-shrink: 0
        width: 120px
        height: 100px
        padding-top: 18px
        padding-left: 24px
        margin-right: 20px
        text-align: center
        border-radius: 8px 8px
        border: 1px solid $grey
        .img-wrap
          background: $grey
          width: 72px
          height: 64px
          img
            width: 100%
            height: 100%
</style>
