<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>申请发票
      </div>
     <!-- <el-tabs type="border-card"> -->
        <!-- <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 增值税电子普通发票    </span>
          我的行程
        </el-tab-pane> -->
        <!-- <el-tab-pane label="增值税纸质普通发票"> -->
          <!-- 表单开始 -->
          <el-form ref="form" :model="form"  label-width="150px" width="600" class="form">
            <div class="formTitle"> 
              发票填写信息<br>
            </div>
            <el-form-item label="选择购买项目" >
              
              <el-select v-model="form.orderNumber" placeholder="请选择购买选项" @change="selected">
                <el-option v-for="item in form.orderList" :label="item.label" :value="item.value" :key="item.id" ></el-option>
                <!-- <el-option label="订单1" value="order1"></el-option>
                <el-option label="订单2" value="order2"></el-option> -->
              </el-select>
            </el-form-item>
            <!-- {{form.orderNumber}} -->
            <el-form-item label="发票金额" >
              <el-input placeholder="请选择购买项目后自动填充" v-bind:value="form.orderCost" disabled></el-input>
            </el-form-item>
            <el-form-item label="发票抬头">
              <el-select v-model="form.invoiceId" placeholder="请选择发票抬头" @change="titleselected">
                <el-option v-for="item in form.invoicecompanylist" :label="item.label" :value="item.value" :key="item.id" ></el-option>
                <!-- <el-option label="订单1" value="order1"></el-option>
                <el-option label="订单2" value="order2"></el-option> -->
              </el-select>
           
              <!-- <el-input v-model="form.title"></el-input> -->

            </el-form-item>
            {{form.invoiceId}}
            <el-form-item label="纳税人识别号">
              <el-input v-bind:value="form.invoiceTaxNumber" placeholder="选择发票抬头后，自动填充（个人发票，纳税识别号可不填）" disabled></el-input>
            </el-form-item>
            <!-- <el-form-item label="发票内容">
              <el-input v-model="form.content"></el-input>
            </el-form-item> -->
            <el-form-item label="收件人">
              <el-select v-model="form.addressId" placeholder="请选择地址簿里的收件人" @change="addressselected">
                <el-option v-for="item in form.addressAllList" :label="item.label" :value="item.value" :key="item.id" ></el-option>
                <!-- <el-option label="订单1" value="order1"></el-option>
                <el-option label="订单2" value="order2"></el-option> -->
              </el-select>
              
            </el-form-item>
            {{form.addressId}}
            <el-form-item label="收件人手机">
              <el-input v-bind:value="form.addrPersonMobile" placeholder="选择收件人后自动填充收件人手机" disabled></el-input>
            </el-form-item>
            <el-form-item label="收件人地址">
              <el-input v-bind:value="form.address" placeholder="选择收件人后自动填充收件人地址" disabled></el-input>
            </el-form-item>
            

            
           <!-- <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
             </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
              <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
          </el-form>
          <!-- 表单结束 -->
        <!-- </el-tab-pane> -->
      <!-- </el-tabs> -->
    </div>

  </div>
</template>
<script>
  import api from "@/api"
  export default {
    data() {
      return {
        form: {
          orderNumber:'',
          orderCost:'',
          orderNote:'',
          orderList:'',
          addressId:'',
          address:'',
          addrPersonName:'',
          addrPersonMobile:'',
          addressAllList:[],
          invoiceId:'',
          invoicecompanylist:[],
          invoiceTaxNumber:'',
          
          projectname: '',
          cost:'',
          title:'',
          identificationNumber:'',
          content:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    created(){
      this.getAllOrder()
      this.getCompanyTitle()
      this.getAllAddressList()
    },
    // watch:{
    //   'form.orderNumber':function(newValue,oldValue){
    //     if(newValue != oldValue){
    //       // this.form.orderList
    //       var objcost=this.form.orderList.filter(item=>{
    //         return item.value===newValue
    //       })
    //       console.log("objCost",objcost)
    //       this.form.orderCost = objcost.cost
    //       console.log("this.form.orderCost",this.form.orderCost)
    //     }
    //   }
    // },
    methods: {
      async getAllAddressList(){
        const allAddress = await api.userzone.allAddress(this.$store.state.uid)
        // this.form.addressAllList=allAddress.data
        // console.log("this.form.addressAllList",this.form.addressAllList)
        this.form.addressAllList = allAddress.data.map(item=>{
          return {
            id:item.id,
            label:item.name,
            value:item.id,
            mobile:item.mobile,
            address:`${item.provinceName1}/${item.cityName1}/${item.expAreaName1}/${item.address}`
          }
        })
        console.log("this.form.addressAllList",this.form.addressAllList)
      },
      async selected(val){
        console.log("val",val)
        this.form.orderList.map(item=>{
            if( item.value == val){
              this.form.orderCost = item.cost
              console.log("this.form.orderCost ",this.form.orderCost )
            }
        })
       
      },
      async titleselected(val){
        console.log("titleselected val",val)
        this.form.invoicecompanylist.filter(item =>{
          if(item.id == val){
        
            this.form.invoiceTaxNumber=item.taxNumber
          }
        })
      },
      
       async addressselected(val){
        console.log("addressselected val",val)
        this.form.addressAllList.filter(item =>{
          if(item.id == val){
                  // addressId:''
          this.form.address=item.address
          // this.form.addrPersonName:''
          this.form.addrPersonMobile=item.mobile
          }
        })
      },
      async getAllOrder(){
        const allOrder = await api.userzone.OrderList()
        console.log("allOrder",allOrder)
        this.form.orderList = allOrder.data.map(item=>{
          return {
            id:item.id,
            label:item.note,
            value:item.orderNumber,
            cost:item.realAmount
          }
        })

        console.log("this.orderList",this.form.orderList)
        
      },
      async getCompanyTitle(){
        const allInvoice = await api.userzone.allInvoice()
        console.log("allInvoice",allInvoice)
        this.form.invoicecompanylist = allInvoice.data.map(item=>{
          return {
            id:item.id,
            label:item.company,
            value:item.id,
            taxNumber:item.taxNumber
          }
        })
        console.log(" this.form.invoicecompanylist", this.form.invoicecompanylist)

      },
      submitForm(formName) {
        var  validation
        this.$refs[formName].validate((res)=>{
          validation = res
          console.log("res",res)
        })
        if (!validation){ 
         return
        }
        var invoicelist = {
          addressId:this.form.addressId,
          invoiceId:this.form.invoiceId,
          orderNumber:this.form.orderNumber
        }
        console.log("invoicelist",invoicelist)
        const applyInvoice = await api.userzone.applyInvoice(addresslist)

        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
::v-deep .formTitle{
  font-size:16px;
  padding:30px;
  font-weight: bold;
}
::v-deep .el-tabs__nav{
  display:flex;
  justify-content: center;
  background:#fff;
  border:1px solid #de4133;
  border-radius: 20px;


}
::v-deep .el-tabs--border-card > .el-tabs__header {
    background-color: transparent;
    border-bottom: none;
    margin: 0;
}
::v-deep .el-tabs--border-card {
    background: transparent;
    border: none; 
    box-shadow:none; 
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #fff;
    background-color: #de4133;
    border-right-color:transparent;
    border-left-color: transparent;
    border-radius: 20px;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item {
    transition:none;
    border: 1px solid transparent;
    margin-top: -1px;
    color: #909399;
}
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
    .form{
      width:800px;
    }
  }
  .content{
    .form {
      width:500px;
      margin-top:30px;    }
  }

}
</style>