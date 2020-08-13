<template lang="html">
  <div class="et-contrast" v-show="value">
    <div class="contrast-body">
      <img class="contrast-img" :src="imgUrl" width="360" height="360">
      <el-upload
        class="contrast-upload"
        action="#"
        :show-file-list="false"
        :before-upload="handleUpload"
        >
        <img v-if="uploadImgUrl" class="upload-img" :src="uploadImgUrl">
        <i v-else class="el-icon-plus upload-img-icon"></i>
      </el-upload>
    </div>
    <el-button class="btn-close" type="text" @click="closeContrast"><i class="el-icon-close"></i></el-button>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    imgUrl: String,
  },
  data() {
    return {
      uploadImgUrl: '',
    };
  },
  watch: {
    value(newVal) {
      if (newVal) {
        const bodyEle = document.querySelector('body');
        bodyEle.style.height = '100%';
        bodyEle.style.overflow = 'hidden';
      }
    },
  },
  methods: {
    handleUpload(file) {
      this.uploadImgUrl = window.webkitURL.createObjectURL(file.raw);
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

<style lang="stylus">
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
  .contrast-body
    position: absolute
    left: 50%
    top: 50%
    width: 740px
    transform: translate(-50%, -50%)
    .contrast-img
      float: left
      margin-right: 20px
      border-radius: 6px
      border: 1px dashed #d9d9d9;
    .contrast-upload
      float: left
      border: 1px dashed #d9d9d9;
      border-radius: 6px
      cursor: pointer
      position: relative
      overflow: hidden
      &:hover
        border-color: #409EFF
      .upload-img-icon
        font-size: 28px
        color: #8c939d
        width: 358px
        height: 358px
        line-height: 358px
        text-align: center
      .upload-img
        display: block
        width: 360px
        height: 360px
  .btn-close
    position: absolute
    right: 0
    top: 0
    .el-icon-close
      font-size: 36px
</style>
