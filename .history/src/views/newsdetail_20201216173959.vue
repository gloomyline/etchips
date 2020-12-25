<template>
  <div class="container">
    <eheader ></eheader>
    <div class="wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>搜索</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content">
        <div class="title">{{data.jouTitle}}</div>
        <div class="date">{{data.jouDate}}</div>
        <div class="content" v-html="data.jouTitle"></div>
        
      
        
      </div>
    </div>
    <efooter></efooter>
  </div> 
</template>

<script>
import api from '@/api';

export default {
  name: 'NewsDetail',
  data() {
    return {
      data:{}

    }
  },
  async created(){
    this.id = this.$route.params.id
    const res = await api.home.newsdetail(this.id)
    this.data = res
  }
  

}  
</script>

<style lang="scss" scoped>
::v-deep .product-table-header th{
  background:#ececec
}
.container {
  background:#f7f7f7;
  position: relative;
  .wrapper{
    min-height: 700px;
    padding:20px 0;
    position: relative;
    width:1164px;
    left:0;
    right:0;
    margin:0 auto;
    .content {
      min-height: 700px;
      margin:20px 0;
      padding:50px;
      background:#fff;
      border:1px solid #e9e9e9;
      color:#000
      
    }
  }

}
  
</style>


