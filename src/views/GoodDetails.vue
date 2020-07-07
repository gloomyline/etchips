<template lang="html">
  <div class="material-detail">
    <et-nav></et-nav>
    <et-search-box></et-search-box>
    <div id="material-top-image" class="material-top-image">
      <div class="top-image"></div>
    </div>

    <div class="material-container">
      <div class="material-top">基本信息</div>
      <div class="material-bottom">
        <div class="material-bottom-left">
          <div class="material-bottom-left-container"></div>
        </div>
        <div class="material-bottom-right">
          <div class="material-bottom-right-container">
            <p class="desc1">SMD/SMT</p>
            <p class="desc2">PHPT60603NY</p>
            <div class="material-search">
              <el-select placeholder="请选择" size="mini" class="select" v-model="materialName">
                <el-option
                  v-for="item in finishStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <p class="desc3">双极晶体管 - 双极结型晶体管(BJT)</p>
            <p class="desc4">双极晶体管 - 双极结型</p>
          </div>
        </div>
      </div>
    </div>

    <div class="material-container hsBottom">
      <div class="material-top">产品说明</div>
      <div class="material-bottom">
        <div class="material-bottom-left"></div>
        <div class="material-bottom-right">
          <div class="material-bottom-right-container"></div>
        </div>
      </div>
    </div>

    <div class="cate-link-nav" id="j-cate-link-nav">
      <div class="uc-cate-link-nav f-cb">
        <div class="uc-cate-link-nav-container"></div>
      </div>
    </div>

    <div class="materialList">
      <div class="cate-a">
        <h3 class="title-a">A类产品</h3>
        <div class="not-vip">
          <button class="el-carousel__arrow carousel-previous" @click="previous"><i class="el-icon-caret-left"></i></button>
          <button class="el-carousel__arrow carousel-next" @click="next"><i class="el-icon-caret-right"></i></button>
          <ul class="materials">
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
          </ul>
        </div>
        <div class="need-vip"><img src="@/assets/img-vip-chips.png" alt=""></div>
      </div>
      <div class="cate-b">
        <h3 class="title-a">B类产品</h3>
        <div class="not-vip">
          <button class="el-carousel__arrow carousel-previous" @click="previous"><i class="el-icon-caret-left"></i></button>
          <button class="el-carousel__arrow carousel-next" @click="next"><i class="el-icon-caret-right"></i></button>
          <ul class="materials">
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
            <li class="material"><div class="img-wrap"><img src="@/assets/img-chip.png" alt=""></div></li>
          </ul>
        </div>
        <div class="need-vip"><img src="@/assets/img-vip-chips.png" alt=""></div>
      </div>
    </div>
    <et-footer></et-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      materialName: 'Nexperia',
      finishStatus: [
        {
          value: '1',
          label: 'Nexperia',
        },
        {
          value: '0',
          label: 'Nexperia',
        },
      ],
    };
  },
  methods: {
    previous() {
    },
    next() {
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
    .material-bottom-left
      float: left;
      width: 50%;
      height: 100%;
      position: relative
      .material-bottom-left-container
        position: absolute;
        left: 50%;
        top: 50%;
        height: 350px;
        width: 350px;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0 auto;
        background-size: 100% 100%;
        background-image:url('../assets/bg_materialDetail.png')
    .material-bottom-right
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
        .material-search
          padding: 30px 0 30px 20px
        .desc3
          color: #333333;
          font-size: 26px;
          padding: 0 0 5px 20px;
        .desc4
          color: rgb(168,181,196);
          font-size: 20px;
          padding: 0 0 0 20px;
.hsBottom
  z-index: -1;
  margin-bottom: -60px;
.uc-cate-link-nav
  position: relative;
  width: 1081px;
  padding: 0 62px;
  margin: 0 auto;
  height: 120px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background-size: 100% 100%;
  // background-image:url('../assets/bg-sub-title.png')
  .fcb
    zoom: 1
  .uc-cate-link-nav-container
    position: absolute;
    width: 500px;
    height: 60px;
    background: red;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
.materialList
  width: 80%
  margin: 30px auto 0 auto
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
