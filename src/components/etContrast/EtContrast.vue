<template lang="html">
  <div class="et-contrast" v-show="value">
    <div ref="swiper" class="contrast-pictures swiper">
      <ul class="swiper-wrapper">
        <li class="swiper-slide" v-for="item in imgs" :key="item.id">
          <img :src="item.url" width="100%" height="100%" :alt="item.name" :data-set-id="item.id">
          <i class="el-icon-success icon-check" :class="{'checked': item.id === checkedId}"></i>
        </li>
      </ul>
    </div>
    <div class="contrast-body">
      <div class="selected-container">
        <div class="img-box" :style="{transform: 'scale(' + scale + ')', transformOrigin: 'top left'}" @mousedown.prevent="drag">
          <img ref="selectedImg" :src="selectedImgSrc" :style="{transform: 'rotateZ(' + rotate + 'deg)'}">
        </div>
        <div class="icon-group">
          <el-button type="primary" icon="el-icon-plus" size="mini" @click="magnify" circle></el-button>
          <el-button type="success" icon="el-icon-minus" size="mini" @click="shrink" circle></el-button>
          <!-- <el-button type="info" icon="el-icon-refresh-left" size="mini" @click="contrarotate" circle></el-button>
          <el-button type="warning" icon="el-icon-refresh-right" size="mini" @click="clockwise" circle></el-button> -->
        </div>
      </div>
      <div class="contrast-container">
        <div v-if="uploadImgUrl" class="img-box-wrap">
          <div class="img-box" :style="{transform: 'scale(' + scale2 + ')', transformOrigin: 'top left'}" @mousedown.prevent="drag">
            <img :src="uploadImgUrl" :style="{transform: 'rotateZ(' + rotate2 + 'deg)'}">
          </div>
        </div>
        <div v-else class="upload-wrap" :style="{'height': uploadWrapHeight}">
          <input ref="fileInput" type="file" name="file" style="visibility: hidden;">
          <i class="icon-upload el-icon-plus" @click="upload"></i>
        </div>
        <div class="icon-group">
          <el-button type="primary" icon="el-icon-plus" size="mini" @click="magnify(false)" circle></el-button>
          <el-button type="success" icon="el-icon-minus" size="mini" @click="shrink(false)" circle></el-button>
          <el-button type="warning" icon="el-icon-close" size="mini" @click="del" circle v-show="uploadImgUrl"></el-button>
          <!-- <el-button type="info" icon="el-icon-refresh-left" size="mini" @click="contrarotate" circle></el-button>
          <el-button type="warning" icon="el-icon-refresh-right" size="mini" @click="clockwise" circle></el-button> -->
        </div>
      </div>
    </div>
    <el-button class="btn-close" type="text" @click="closeContrast"><i class="el-icon-close"></i></el-button>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    selectedId: [Number, String],
    imgs: Array,
  },
  data() {
    return {
      uploadImgUrl: '',
      checkedId: null,
      scale: 1,
      rotate: 0,
      scale2: 1,
      rotate2: 0,
      uploadWrapHeight: '',
    };
  },
  computed: {
    selectedImgSrc() {
      const imgItem = this.imgs.find((img) => img.id === this.checkedId);
      return imgItem ? imgItem.url : '';
    },
  },
  watch: {
    value(newVal) {
      if (newVal) {
        const bodyEle = document.querySelector('body');
        bodyEle.style.height = '100%';
        bodyEle.style.overflow = 'hidden';
        this.checkedId = Number(this.selectedId);
        /* eslint-disable no-unused-expressions */
        !this.swiper && this.initSwiper();
        this.initContrastHeight();
      } else {
        this.checkedId = null;
      }
    },
  },
  methods: {
    initSwiper() {
      const { Swiper } = this;
      /* eslint-disable no-unused-vars */
      this.$nextTick(() => {
        this.swiper = new Swiper('.swiper', {
          width: 120,
          spaceBetween: 8,
          freeMode: true,
        });
        this.swiper.on('click', (swiper, event) => {
          const { target } = event;
          this.checkedId = Number(target.dataset.setId);
        });
      });
    },
    initContrastHeight() {
      this.$nextTick(() => {
        this.uploadWrapHeight = `${this.$refs.selectedImg.offsetHeight}px`;
      });
    },
    magnify(isContrast = true) {
      if (isContrast) {
        if (this.scale >= 3) return;
        this.scale += 0.25;
      } else {
        if (this.scale2 >= 3) return;
        this.scale2 += 0.25;
      }
    },
    shrink(isContrast = true) {
      if (isContrast) {
        if (this.scale <= 1) return;
        this.scale += (-0.25);
      } else {
        if (this.scale2 <= 1) return;
        this.scale2 += (-0.25);
      }
    },
    contrarotate() {
      this.rotate += (-90);
    },
    clockwise() {
      this.rotate -= 90;
    },
    del() {
      this.uploadImgUrl = '';
    },
    upload() {
      const { fileInput } = this.$refs;
      fileInput.click();
      fileInput.addEventListener('change', (e) => {
        let targetImgUrl = '';
        const uploadedFile = fileInput.files[0];
        if (window.URL.createObjectURL) {
          targetImgUrl = window.URL.createObjectURL(uploadedFile);
        }
        this.uploadImgUrl = targetImgUrl;
      });
    },
    drag(event) {
      // target element
      const oEle = event.target;
      // parent box, img box;
      const pEle = oEle.parentNode;
      // on the x-Axis and y-Axis
      // calculate the relative distance between mousedown point and target element respectively
      const disX = event.clientX - oEle.offsetLeft;
      const disY = event.clientY - oEle.offsetTop;
      function moveListener(e) {
        const left = e.clientX - disX;
        const top = e.clientY - disY;
        pEle.style.left = `${left}px`;
        pEle.style.top = `${top}px`;
      }
      function upListener(e) {
        document.removeEventListener('mousemove', moveListener);
        document.removeEventListener('mouseup', upListener);
      }
      document.addEventListener('mousemove', moveListener);
      document.addEventListener('mouseup', upListener);
    },
    closeContrast() {
      const bodyEle = document.querySelector('body');
      bodyEle.style.height = '';
      bodyEle.style.overflow = '';
      this.uploadImgUrl = '';
      this.$emit('input', false);
    },
  },
};
</script>

<style lang="stylus" scoped>
.et-contrast
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, .6)
  z-index: 1001
  .swiper
    absolute: left bottom
    width: 100%
    background: $white
    z-index: 1002
    .swiper-wrapper
      padding: 8px
      .swiper-slide
        position: relative
        height: 80px
        .icon-check
          display: none
          &.checked
            display: inline-block
            absolute: right 4px top 4px
            font-size: 24px
            color: $blue
        img
          border-radius: 4px 4px
  .contrast-body
    position: absolute
    left: 50%
    top: 50%
    width: 1200px
    transform: translate(-50%, -50%)
    overflow: auto
    .selected-container
      position: relative
      float: left
      width: 45%
      overflow: hidden
      border: 1px dashed $grey2
      border-radius: 8px 8px
      .img-box
        position: relative
        img
          width: 100%
          height: auto
      .icon-group
        absolute: right 4px top 4px
    .contrast-container
      position: relative
      float: right
      width: 45%
      overflow: hidden
      border: 1px dashed $grey2
      border-radius: 8px 8px
      .img-box
        position: relative
        img
          width: 100%
          height: auto
      .icon-group
        absolute: right 4px top 4px
      .upload-wrap
        display: flex;
        align-items: center;
        justify-conetnt: center;
        .icon-upload
          font-size: 64px
          color: $grey2
          &:active
            color: #eeefff
  .btn-close
    position: absolute
    right: 0
    top: 0
    .el-icon-close
      font-size: 36px
</style>
