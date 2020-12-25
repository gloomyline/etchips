<template>
  <div class="container">
    <eheader ></eheader>
    <div class="wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>搜索</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content">
        sasdfasdf
      
        
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
      id:"",
      data:{}

    }
  },
  async created(){
    console.log("this.$route.params.id",this.$route.params.id)
    this.id = this.$route.params.id
    const data = await api.home.newsdetail(this.id)
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
      
    }
  }

}
  
</style>


