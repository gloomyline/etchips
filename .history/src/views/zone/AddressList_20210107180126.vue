<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>基本信息
      </div>
      <div class="content">
        <el-form  label-width="120px" :model="form" class="form">
          <el-form-item label="地址信息">
            <el-input v-model="form.provinceName" ></el-input>省
            <el-input v-model="form.cityName" ></el-input>市
            <el-input v-model="form.expAreaName" ></el-input>区

          </el-form-item>

          <el-form-item label="地址信息" required>
            <el-col :span="6">
              <el-form-item prop="provinceName">
                <el-select v-model="form.provinceName" placeholder="请选择省">
                  <el-option v-for="item in form.provinceNamelist" :label="item.name" :value="item.id" :key="item.id"></el-option>
                  
                  <!-- <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option> -->
                </el-select>
              </el-form-item>
              {{form.provinceName}}
            </el-col>
            <el-col class="line" :span="2">省</el-col>
            <el-col :span="6">
              <el-form-item prop="cityName">
                <el-select v-model="form.cityName" placeholder="请选择市">
                  <el-option v-for="item in form.cityNamelist" :label="item.name" :value="item.id" :key="item.id"></el-option>
                  
                  <!-- <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option> -->
                </el-select>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">市</el-col>
            <el-col :span="6">
              <el-form-item prop="">
                <el-time-picker placeholder="选择时间"  style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">区</el-col>
          </el-form-item>
          <el-form-item label="详细地址" >
            <el-input type="textarea" v-model="form.address" ></el-input>
          </el-form-item>
          <el-form-item label="收件人姓名">
            <el-input v-model="form.name" ></el-input>
          </el-form-item> 
          <el-form-item label="收件人手机">
            <el-input v-model="form.mobile" ></el-input>
          </el-form-item> 
          <el-form-item label="收件人公司">
            <el-input v-model="form.company" ></el-input>
          </el-form-item> 
          <!-- <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>  -->
          
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
        provinceNamelist:"",
        cityName:"",
        cityNamelist:"",
        expAreaName:"",
        expAreaNamelist:"",

        address:"",
        // post:"",
        name:"",
        mobile:'',
        company:""

      }
    }
  },
  async created(){
    console.log("this",this)
    const provinceName = await api.userzone.getAddressProvince()
    this.form.provinceNamelist = provinceName.data
    const cityName = await api.userzone.getAddressCity(this.form.provinceName)

    const expAreaName = await api.userzone.getAddressArea("3201")
    console.log("provinceName",provinceName)
    console.log("cityName",cityName)
    console.log("expAreaName",expAreaName)

  },
  computed(){
    cityNamelist: function (){
      // return getAddressCity()
    }
  },
  computed: {
    now: function () {
      return Date.now()
    }
  },
  methods:{
    async getAddressCity(){
      const cityName = await api.userzone.getAddressCity(this.form.provinceName)
      this.cityNamelist=cityName.data
      return this.cityNamelist
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
      width:500px;
      margin-top:30px;    }
    .line{
      text-align: center;
    }
  }
  

}

</style>