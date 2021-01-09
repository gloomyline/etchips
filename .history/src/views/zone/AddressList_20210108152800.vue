<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>基本信息
      </div>
      <div class="content">
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
    </div>
   
  </div>
</template>
<script>
import api from "@/api"
export default {
  data(){
    return {
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
      var addresslist = {
        customer:this.$store.state.username,
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
          message: '登出成功！',
          onClose() {
            self.isLogoutShown = false;
            self.$emit('logout');
            if (self.$route.meta.requireAuth) {
              self.$router.push({ name: 'Home' });
            }
          },
        });


      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
    .form {
      width:600px;
      margin-top:30px;    }
    .line{
      text-align: center;
    }
  }
  

}

</style>