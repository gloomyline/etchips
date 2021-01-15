<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>检测订单
      </div>
      <el-button type="primary"  @click="gotopay">去支付</el-button>
      <img :src="alicode" />
      <div class="content">

        <el-table
          :data="orderList"
          border
          style="width: 100%">
          <el-table-column
            prop="orderNumb"
            label="订单号"
           >
          </el-table-column>
          <el-table-column
            prop="orderName"
            label="订单名称"
           >
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="时间"
            >
          </el-table-column>
          <el-table-column
            prop="detectionStr"
            label="是否检测"
            >
          </el-table-column>
          <el-table-column
            prop="examineStr"
            label="是否审核"
            >
          </el-table-column>
          <el-table-column
            prop="payStr"
            label="是否支付"
            >
          </el-table-column>
          orderAmount
          <el-table-column
            prop="orderAmount"
            label="支付金额"
            >
          </el-table-column>
          <el-table-column
            
            label="操作"
            >

            <template slot-scope="scope">
                
             <el-button type="primary" v-if='scope.row.payStatus == 0' @click="gotopay(scope.$index, scope.row)">去支付</el-button>
              <!-- <el-tag type="success" v-if='scope.row.billType == 2'>纸质发票</el-tag> --> 
            </template> 
          </el-table-column>
          
          <!-- <el-table-column
            prop="billType"
            label="发票类型">
             <template slot-scope="scope">
                <!-- 0待审批  1 通过   2  未通过  3已撤回 
              <el-tag v-if='scope.row.billType == 1'>电子发票</el-tag>
              <el-tag type="success" v-if='scope.row.billType == 2'>纸质发票</el-tag>
            </template> 
          </el-table-column> -->
          <!-- <el-table-column
            prop="billStatus"
            label="开票状态">
             <template slot-scope="scope">
                <!-- 0待审批  1 通过   2  未通过  3已撤回 
              <el-tag v-if='scope.row.billStatus == 0'>未开票</el-tag>
              <el-tag type="success" v-if='scope.row.billStatus == 1'>已开票</el-tag>
            </template> 
          </el-table-column> -->
          <!-- <el-table-column label="操作">
            <template slot-scope="scope">
              <!-- <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">撤回</el-button> 
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>

            </template>
          </el-table-column> -->
        </el-table>



       
      </div>
    </div>
    <!-- 支付对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" @close="closedialog" @open="opendialog">
      <el-form ref="form" :model="form">
        <el-radio-group v-model="form.payType" @change="payTypeChange">
          <el-radio label="1" border>微信扫码</el-radio>
          <el-radio label="2" border>支付宝扫码</el-radio>
          
        </el-radio-group>
        <el-form-item >
          <div>
            <div class="paymoney" v-html="paymoney"></div>
            <img v-if="imgdata" ref ="imgdata" src=""  width="200" >
          

          </div>
        </el-form-item>
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">关闭</el-button>
      </div> -->
    </el-dialog>
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
      dialogFormVisible:false, // 支付对话框
      dataApplyList:[],
      orderList:[],
      invoiceList:[],
      alicode:"",
      delectdialogVisible:false,
      imgdata:true,
      form:{
        payType:""
      },
      dialogTitle:"",
      paymoney:"2",
    }
  },
  async created(){
    // console.log("this",this)
    // var uid = this.$store.state.uid
    // const showDataApply = await api.userzone.showDataApply("lll2020")
    
   this.showOrderList()
  


  },
  methods:{
   async gotopay(index,row){
     this.dialogFormVisible=true
     console.log("委托检测订单",index,row)
     this.orderNumb = row.orderNumb
     const payment =await api.userzone.gotopay(row.orderNumb)
     console.log("payment",payment)
     this.money = row.orderAmount
     this.imgdata=payment.msg
     this.feachQRcode(this.form.payType,this.orderNumb,this.money)
  },
  closedialog(){
      this.form.payType=""
      this.$refs.imgdata.src = ""
      this.dialogFormVisible = false
      this.paymoney = ""
      // this.imgdata=false
      
  },
  opendialog(){

  },
  //payType值触发事件
  payTypeChange(val){
    console.log("changeval",val)
    this.$refs.imgdata.src = ""
    if(val==="2"){
      this.feachQRcode(2,this.orderNumb,this.money)
    }
  },
  async feachQRcode(payType,orderNumb,money){

      const res = await api.userzone.gotopay(payType,orderNumb)
      console.log("res",res)
      // this.imgdata = JSON.stringify(res.msg)
      // console.log("imgdata",this.imgdata)
      // console.log("imgdata类型",typeof this.imgdata)
      // console.log("res",res)
      // this.formdata = res;
      
      if(res.success){
        this.paymoney = `支付金额 <span>￥${money}</span>`
        this.imgdata = res.msg
        
        this.$refs.imgdata.src = this.imgdata
        console.log("this.$refs.imgdata",this.$refs.imgdata.src)
      }
     
    },
  



   async showOrderList(){
      var uid = this.$store.state.uid
      const showOrderList =await api.userzone.getOrderList()
      this.orderList = showOrderList.data
      console.log("showOrderList````",showOrderList.data)
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