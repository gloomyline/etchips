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
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>

            </template>
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
      dataApplyList:[]
    }
  },
  async created(){
    console.log("this",this)
    var uid = this.$store.state.uid
    const showDataApply = await api.userzone.showDataApply("lll2020")
    console.log("showDataApply",showDataApply)
    this.dataApplyList=showDataApply.data


  },
  methods:{
    handleEdit(index,row){
      console.log("rowrow修改",row)
    },
    handleDelete(index,row){
      console.log("rowrow删除",row)
    },
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
    .el-table{
      margin-top:30px;
    }
    .form {
      width:500px;
      margin-top:30px;    }
  }

}

</style>