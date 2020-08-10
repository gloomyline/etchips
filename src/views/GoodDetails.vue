<template lang="html">
  <div class="material-detail">
    <et-nav ref="login" @logout="updateUserStatus" @login="updateUserStatus"></et-nav>
    <et-search-box></et-search-box>
    <div id="material-top-image" class="material-top-image">
      <div class="top-image"></div>
    </div>

    <div class="material-container">
      <div class="material-top">基本信息</div>
      <div class="material-bottom">
        <div class="material-bottom-left">
          <div class="material-bottom-left-container"><img :src="material.headPicturePath" width="360" height="200"></div>
        </div>
        <div class="material-bottom-right">
          <div class="material-bottom-right-container">
            <div class="material-type"><span class="label">产品型号：</span><span class="value">{{ material.brand && material.brand.brandName }}</span></div>
            <div class="supplier"><span class="label">制造商：</span><span class="value">{{ material.supplier && material.supplier.supplierName }}</span></div>
            <div class="desc"><span class="label">物料编号：</span><span class="value">{{ material.materialNumber }}</span></div>
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
            <div class="links-container" v-if="material.products && material.products.length > 0">
            <a v-for="item in material.products" @click.prevent="previewProduct(item.view)" :key="item.id" class="product">{{ item.title }}</a></div>
            <p class="no-data" v-else>暂无</p>
          </div>
        </div>
        <div class="material-bottom-right">
          <div class="wrap inline-center">
            <h3 class="title">pcn列表</h3>
            <div class="links-container" v-if="material.specificats && material.specificats.length > 0">
            <a v-for="item in material.specificats" @click.prevent="previewSpecification(item.view)" :key="item.id" class="specification">{{ item.title }}</a></div>
            <p class="no-data" v-else>暂无</p>
          </div>
        </div>
      </div>
    </div>

    <div class="materialList">
      <el-form :model="searchForm" inline>
        <el-form-item prop="dc" label="DC（年份）">
          <el-select v-model="searchForm.dc" placeholder="请选择年份">
            <el-option
              v-for="item in dcs"
              :key="item"
              :label="item"
              :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="coo" label="COO（产地）">
          <el-select v-model="searchForm.coo" placeholder="请选择产地">
            <el-option
              v-for="item in coos"
              :key="item"
              :label="item"
              :value="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
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
              <li class="material" v-for="item in material.picturesA" :key="item.id"><img :src="item.path"></li>
            </ul>
          </div>
          <div class="pictures-b">
            <div class="not-vip" v-if="isAuthed">
              <button class="el-carousel__arrow carousel-previous" @click="previous"><i class="el-icon-caret-left"></i></button>
              <button class="el-carousel__arrow carousel-next" @click="next"><i class="el-icon-caret-right"></i></button>
              <ul class="materials">
                <li class="material" v-for="item in material.picturesB" :key="item.id"><img :src="item.path"></li>
              </ul>
            </div>
            <div class="need-vip" v-else>
              <img src="@/assets/img-vip-chips.png">
              <el-button type="danger" round @click="toBeVip">开通会员查看</el-button>
            </div>
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
      searchForm: {
        dc: '全部',
        coo: '全部',
      },
      dcs: [],
      coos: [],
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
      const dcs = new Set(['全部']);
      const coos = new Set(['全部']);
      this.materials.forEach((material) => {
        dcs.add(material.dc);
        coos.add(material.coo);
      });
      this.dcs = Array.from(dcs);
      this.coos = Array.from(coos);
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
    toBeVip() {
      this.$refs.login.openDialog();
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
  width: 80%;
  height: 400px
  margin: 0 auto
  &.hsBottom
    height: 280px
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
      padding-top: 50px
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
      .material-bottom-right-container
        width: 100%
        height: 100%
        padding-top: 80px
        .supplier > .value
          color: rgb(255, 153, 132)
        .label
          display: inline-block
          width: 80px
          height: 32px
          line-height: 32px
          text-align: right
          margin-right: 20px
          margin-bottom: 20px
          font-size: 16px
          font-weight: bold
        .value
          height: 32px
          line-height: 32px
          font-size: 14px
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
  .need-vip
    position: relative
    .el-button
      position: absolute
      left: 50%
      top: 50%
      transform: translate3d(-50%, -50%, 0)
    img
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
        padding-top: 4px
        padding-left: 4px
        margin-right: 20px
        text-align: center
        img
          width: 100%
          height: 100%
          border-radius: 8px 8px
</style>
