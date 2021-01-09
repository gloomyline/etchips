<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>地址列表
      </div>
      <div class="content">
        <div class="address-title">新增地址</div>
        <el-form  label-width="120px" :model="form" class="form" :rules="rules" ref="form">
          <el-form-item label="地址信息" required>
            <el-col :span="6">
              <el-form-item prop="provinceName">
                <el-select v-model="form.provinceName" placeholder="请选择省" @change="provinceNameChange">
                  <el-option v-for="item in form.provinceNamelist" :label="item.name" :value="item.id" :key="item.id"></el-option>
                  
                  <!-- <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option> -->
                </el-select>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">省</el-col>
            <el-col :span="6">
              <el-form-item prop="cityName">
                <el-select v-model="form.cityName" placeholder="请选择市" @change="cityNameChange">
                  <el-option v-for="item in form.cityNamelist" :label="item.name" :value="item.id" :key="item.id"></el-option>
                  
                  <!-- <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option> -->
                </el-select>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">市</el-col>
            <el-col :span="6">
              <el-form-item prop="expAreaName">
                <el-select v-model="form.expAreaName" placeholder="请选择区/县" @change="expAreaNameChange">
                  <el-option v-for="item in form.expAreaNamelist" :label="item.name" :value="item.id" :key="item.id"></el-option>
                  
                  <!-- <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option> -->
                </el-select>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">区</el-col>
          </el-form-item>
          <el-form-item label="详细地址" prop="address" >
            <el-input type="textarea" placeholder="请输入详细地址信息,如道路,门牌号,小区,楼栋号,单元等" v-model="form.address" ></el-input>
          </el-form-item>
          <el-form-item label="收件人姓名" prop="name">
            <el-input v-model="form.name" ></el-input>
          </el-form-item> 
          <el-form-item label="收件人手机"  prop="mobile">
            <el-input v-model="form.mobile" ></el-input>
          </el-form-item> 
          <el-form-item label="收件人公司"  prop="company">
            <el-input v-model="form.company" ></el-input>
          </el-form-item> 
          <!-- <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>  -->

          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
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
        <el-table-column
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
      <!-- 地址列表结束 -->
    
    </div>
   
  </div>
</template>
<script>
import api from "@/api"
export default {
  data(){
    return {
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
        provinceName:"",
        provinceNamelist:[],
        cityName:"",
        cityNamelist:[],
        expAreaName:"",
        expAreaNamelist:[],

        address:"",
        // post:"",
        name:"",
        mobile:'',
        company:""

      },
      rules:{
        provinceName: [
          { required: true, message: '请选择省份', trigger: 'change' }
        ],
        cityName: [
          { required: true, message: '请选择市', trigger: 'change' }
        ],
        expAreaName: [
          { required: true, message: '请选择区/县', trigger: 'change' }
        ],
        name: [
            { required: true, message: '请填写收件人姓名', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请填写详细地址', trigger: 'blur' }
        ],
        mobile:[
          { required: true, message: '请填写收件人姓名', trigger: 'blur' },
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
    console.log("this",this)
    const provinceName = await api.userzone.getAddressProvince()
    this.form.provinceNamelist = provinceName.data
    this.cityNamelist = await api.userzone.getAddressCity("32")

    // const expAreaName = await api.userzone.getAddressArea("3201")
    // console.log("provinceName",provinceName)
    // console.log("cityName",cityName)
    // console.log("expAreaName",expAreaName)
    //查看uid下的所有地址

    const allAddress = await api.userzone.allAddress(this.$store.state.uid)
    this.allAddress=allAddress.data

  },
  methods:{
    async provinceNameChange(value){
      this.form.cityName=""
      this.form.cityNamelist=""
      this.form.expAreaName=""
      this.form.expAreaNamelist=""
      const cityName = await api.userzone.getAddressCity(value)
    

      this.form.cityNamelist = cityName.data
      console.log("this.cityNamelistchange",this.form.cityNamelist)
    },
    async cityNameChange(value){
      this.form.expAreaName=""
      this.form.expAreaNamelist=""
      const expAreaName = await api.userzone.getAddressCity(value)
    

      this.form.expAreaNamelist = expAreaName.data
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
    // var validation=this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!');
    //       return true
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
      // var validation = this.$refs[formName].validate().then()
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
        provinceName:this.form.provinceName,
        cityName:this.form.cityName,
        expAreaName:this.form.expAreaName,
        address:this.form.address,
        name:this.form.name,
        mobile:this.form.mobile,
        company:this.form.company
      }
      console.log("addreslist",addresslist)
      const saveAddress = await api.userzone.saveAddress(addresslist)

      this.$message({
          type: 'success',
          message: saveAddress.msg,
         
        });
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