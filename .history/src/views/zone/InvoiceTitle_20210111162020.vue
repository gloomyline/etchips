<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>抬头管理
      </div>
      <div class="content">
        <div class="address-title">{{addressTitle}}</div>
        <el-form  label-width="120px" :model="form" class="form" :rules="rules" ref="form">
          
          
          <el-form-item label="公司名称即抬头" prop="company">
            <el-input v-model="form.company" ></el-input>
          </el-form-item> 
          <el-form-item label="纳税人识别码" placeholder="个人发票无纳税人识别号"  prop="taxNumber">
            <el-input v-model="form.taxNumber" ></el-input>
          </el-form-item> 
          <el-form-item label="发票类型"  prop="type">
            <el-radio-group v-model="form.type">
              
              <el-radio   v-for="item in form.typelist" border :label="item.value"  :key="item.value">{{item.label}}</el-radio>
              <!-- <el-radio border label="个人" value="0"></el-radio>
              <el-radio border label="企业" value="1"></el-radio> -->
            </el-radio-group>
            {{form.type}}
          </el-form-item> 
          <!-- <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>  -->

          <el-form-item>
            <el-button type="primary" @click="editForm('form')" v-if="isEdit" >修改</el-button>
            <el-button type="primary" @click="submitForm('form')" v-else >保存</el-button>
            
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
          
        </el-form>
      </div>
      <!-- <el-alert
        title="成功提示的文案"
        type="info"
        show-icon>
      </el-alert> -->
      <!-- 地址列表开始 -->

      <el-table
        :data="allAddress"
        border
        style="width: 100%">
        
        <el-table-column label="公司名称即抬头">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.company }}</span>
          </template>
        </el-table-column>
        <el-table-column label="纳税人识别号">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.taxNumber }} / {{ scope.row.cityName1 }} / {{ scope.row.expAreaName1 }} / {{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column label="发票类型">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column
          label="日期"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>-->
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
      <!-- 地址列表结束 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <span>您确定要删除这条地址信息吗</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="delAdrress(addressid)">确 定</el-button>
        </span>
      </el-dialog>
    
    </div>
   
  </div>
</template>
<script>
import api from "@/api"
export default {
  data(){
    return {
      addressTitle:"新增抬头信息",
      dialogVisible: false,
      isEdit:false,
      allAddress:[],
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      form:{
        
        // post:"",
        company:"",
        taxNumber:'',
        typelist:[
          {label:"个人",value:0},
          {label:"企业",value:1}
        ],
        type:0

      },
      rules:{
       
        company: [
            { required: true, message: '请输入发票抬头', trigger: 'blur' },
        ],
        taxNumber: [
          { required: true, message: '请输入纳税识别码', trigger: 'blur' }
        ],
        type:[
          { required: true, message: '请选择发票类型', trigger: 'blur' },
        ],
      }
    }
  },
  computed:{
    uid:function(){
      console.log("this.$store",this.$store)
      return this.$store.state.uid
    }
  },
  watch:{
    // "form.provinceName":{
    //   handler(newValue,oldValue){
    //     if(newValue != oldValue){
    //       console.log("newValue",newValue)
    //       this.getAddressCity(newValue)
    //     }
    //   }
    // }
  },
  async created(){
   

   
  },
  methods:{
    //查看uid下的所有地址
    async getAllInvoice(){
      const allInvoice = await api.userzone.allInvoice()
      console.log("allInvoice",allInvoice)
      this.allInvoice=allInvoice.data
    },
    async handleEdit(index, row) {

      console.log("index-row",index, row);
      this.isEdit = true
      this.addressTitle ="修改抬头信息"
      this.form.provinceName = Number(row.provinceName),

      await this.provinceNameChange(this.form.provinceName)
      this.form.cityName = Number(row.cityName),

      await this.cityNameChange(row.cityName)
      this.form.id= row.id
      this.form.expAreaName = Number(row.expAreaName),
      //省市区文字
      this.form.provinceName1 = row.provinceName1,
      this.form.cityName1 = row.cityName1,
      this.form.expAreaName1 = row.expAreaName1,
      
      this.form.address = row.address,
        // post:"",
      this.form.name = row.name,
      this.form.mobile = row.mobile,
      this.form.company = row.company
      this.getAllInvoic()

      
      
    },
    async delAdrress(addressid){
      this.dialogVisible = false
      const res = await api.userzone.delAddress(addressid)
      console.log("delres",res)
      
      this.getAllInvoic()
    },
    async handleDelete(index, row) {

      this.dialogVisible = true
      
      this.addressid=row.id
      
    },
    async provinceNameChange(value){
      this.form.cityName=""
      this.form.cityNamelist=""
      this.form.expAreaName=""
      this.form.expAreaNamelist=""
      const cityName = await api.userzone.getAddressCity(value)
      this.form.cityNamelist = cityName.data.map((item)=>{
      return {
        label:item.name,
        value:item.id
      }
    })
    

      // this.form.cityNamelist = cityName.data
      console.log("this.cityNamelistchange",this.form.cityNamelist)
    },
    async cityNameChange(value){
      this.form.expAreaName=""
      this.form.expAreaNamelist=""
      const expAreaName = await api.userzone.getAddressCity(value)
      this.form.expAreaNamelist = expAreaName.data.map((item)=>{
      return {
        label:item.name,
        value:item.id
      }
    })
    

      // this.form.expAreaNamelist = expAreaName.data
      console.log("this.expAreaNamelist",this.form.expAreaNamelist)
    },
    
    
    async getAddressCity(provinceid){
      const cityName = await api.userzone.getAddressCity(provinceid)
    

      this.cityNamelist = cityName.data
      console.log("this.cityNamelist",this.cityNamelist)
    },
    async expAreaNameChange(value){
      const expAreaName = await api.userzone.getAddressArea(value)
    

      this.expAreaNamelist = expAreaName.data
      console.log("this.expAreaNamelist",this.expAreaNamelist)
    },
    // async getAddressArea(cityid){
    //   const areaName = await api.userzone.getAddressCity(cityid)
    //   this.areaNamelist=cityName.data
    // }
    async submitForm(formName) {
      console.log("this.$store.state",this.$store.state)
      var  validation
       this.$refs[formName].validate((res)=>{
         validation = res
        console.log("res",res)
      })
      console.log("validation",validation)
      if (!validation){ 
        return
      }
      var invoicelist = {
        company:this.form.company,
        taxNumber:this.form.taxNumber,
        type:this.form.type,
       
      }
      console.log("invoicelist",invoicelist)
      const saveAddress = await api.userzone.addOrUpdate(invoicelist)

      this.$message({
          type: 'success',
          message: saveAddress.msg,
         
        });
      this.getAllInvoic()
      this.$refs[formName].resetFields()

      
      // /personalCenter/saveAddress
    },
    async editForm(formName) {
      console.log("this.$store.state",this.$store.state)
      var  validation
       this.$refs[formName].validate((res)=>{
         validation = res
        console.log("res",res)
      })
      console.log("validation",validation)
      if (!validation){ 
        return
      }
      var addresslist = {
        customer:this.$store.state.uid,
        id:this.form.id,
        provinceName:this.form.provinceName,
        cityName:this.form.cityName,
        expAreaName:this.form.expAreaName,
        address:this.form.address,
        name:this.form.name,
        mobile:this.form.mobile,
        company:this.form.company
      }
      console.log("addreslist",addresslist)
      const saveAddress = await api.userzone.updateAddress(addresslist)

      this.$message({
          type: 'success',
          message: saveAddress.msg,
         
        });
      this.isEdit = false
      this.addressTitle ="新增抬头信息"
      this.getAllInvoic()
      this.$refs[formName].resetFields()

      
      // /personalCenter/saveAddress
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    .address-title{
      padding:30px 10px 5px 30px;
      color:red;
      font-size:16px;
      font-weight: bold;
    }
    .form {
      width:600px;
      margin-top:30px;    }
    .line{
      text-align: center;
    }
  }
  

}

</style>