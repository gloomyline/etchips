<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>查看发票
      </div>
      <div class="content">

        <el-table
          :data="invoiceList"
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
             <template slot-scope="scope">
                <!-- 0待审批  1 通过   2  未通过  3已撤回 -->
              <el-tag v-if='scope.row.statue==0'>待审批</el-tag>
              <el-tag type="success" v-if='scope.row.statue==1'>通过</el-tag>
              <el-tag type="danger" v-if='scope.row.statue==2'>未通过</el-tag>
              <el-tag type="info" v-if='scope.row.statue==3'>已撤回</el-tag>
            </template> 
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!-- <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">撤回</el-button> -->
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>

            </template>
          </el-table-column>
        </el-table>



       
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog
      title="删除提示"
      :visible.sync="delectdialogVisible"
      width="30%"
      >
      <span>您确定要删除这条申请数据吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delectdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delAdrress()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- <el-dialog
      title="撤回提示"
      :visible.sync="canceldialogVisible"
      width="30%"
      >
      <span>您确定要撤回这条申请数据吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delAdrress(addressid)">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
import api from "@/api"
export default {
  data(){
    return {
      dataApplyList:[],
      invoiceList:[],
      delectdialogVisible:false
    }
  },
  async created(){
    console.log("this",this)
    // var uid = this.$store.state.uid
    // const showDataApply = await api.userzone.showDataApply("lll2020")
    
   this.showInvoiceList()
  


  },
  methods:{
   async showInvoiceList(){
      var uid = this.$store.state.uid
      const showinvoiceList = await api.userzone.invoiceList()
       this.invoiceList=invoiceList.data
      console.log("showinvoiceList",invoiceList)
    },
    // handleEdit(index,row){
    //   console.log("rowrow修改",row)
    // },
    handleDelete(index,row){
      console.log("rowrow删除",row)
      this.delectdialogVisible = true
      this.dataid = row.id
    },
    async delAdrress(){
      const res = await api.userzone.delDataApplication(this.dataid)
      this.delectdialogVisible = false
      this.$message({
          message: res.msg,
          type: 'success'
        });

      this.showDataApply()

      
    }
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