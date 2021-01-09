<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>查看数据申请
      </div>
      <div class="content">

        <el-table
          :data="dataApplyList"
          border
          style="width: 100%">
          <el-table-column
            prop="supplier"
            label="料号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="brandName"
            label="品牌"
            width="180">
          </el-table-column>
          <el-table-column
            prop="supplier"
            label="供应商">
          </el-table-column>
          <el-table-column
            prop="statue"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="statue"
            label="状态">
          </el-table-column>
        </el-table>



       
      </div>
    </div>
   
  </div>
</template>
<script>
import api from "@/api"
export default {
  data(){
    return {
      
    }
  },
  async created(){
    console.log("this",this)
    var uid = this.$store.state.uid
    const showDataApply = await api.userzone.showDataApply("lll2020")
    console.log("showDataApply",showDataApply)


  }
}
</script>>
<style lang="scss" scoped>
.contentwrapper{
  .container{
    // display:block;
    position:relative;
    padding:30px;
    float:none;
    .title{
      font-size:20px;
      padding-bottom:10px;
      width:100%;
      border-bottom:1px dashed #eee;
      color:#272626;
      .iconfont{
        color:#ff5b6c;
        font-size:20px;
        display: inline-block;
        width:30px;
      }
    }
  }
  .content{
    .form {
      width:500px;
      margin-top:30px;    }
  }

}

</style>