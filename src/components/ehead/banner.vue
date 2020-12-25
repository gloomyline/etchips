<template>
  <div class="banner">
    <div class="container">
      <div class="title">
        <span>物料线上验真平台</span><br>
        即刻了解任何电子芯片
      </div>
      <div class="search">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入料号" v-model="searchContent" class="input-with-select" @keyup.enter.native="gotoSearchResults">
          <el-button slot="append" icon="el-icon-search" @click="gotoSearchResults">马上搜索</el-button>
        </el-input>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      searchContent:""
    }
  },
  methods:{
    gotoSearchResults() {
      this.$router.push({ name: 'SearchResults', query: { searchContent: this.searchContent } });
    },
  }
}
</script>  
<style lang="scss" scoped>
::v-deep .el-button.el-button--default{
  color:#fff;
  background:#ff1949;
  border:#ff1949 1px solid; 
}
::v-deep .el-button.el-button--default .el-icon-search{
  color:#Fff;
}
.banner{
  position:relative;
  background:url(../../common/images/banner.jpg);
  background-position: center center;
  height:430px;
  color:#fff;
  .container {
    position:absolute;
    // background:red;
    text-align: center;
    width:450px;
    height:80px;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    .title{
      font-family: bannerFont;
      font-size:30px;
      line-height:40px;
      span {
        font-size:50px;
      }
    }
  }
  

}
</style>