<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>基本信息
      </div>
      <div class="content">
        <el-form  label-width="80px" :model="form" class="form">
          <el-form-item label="地址信息">
            <el-input v-model="form.provinceName" ></el-input>
            <el-input v-model="form.cityName" ></el-input>
            <el-input v-model="form.expAreaName" ></el-input>

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
        cityName:"",
        expAreaName:"",

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
    const userinfo = await api.userzone.userinfo("lll2020")
    this.form.name=userinfo.name
    this.form.username= userinfo.username
    this.form.mobile= userinfo.mobile
    console.log("userinfo",userinfo)

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