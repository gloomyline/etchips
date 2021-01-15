<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>查看发票
      </div>
      <div class="content">
        <el-form  label-width="80px" :model="form" class="form">
          <el-form-item label="用户名">
            <el-input v-model="form.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="用户昵称" >
            <el-input v-model="form.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.mobile" disabled></el-input>
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
        name:"",
        username:"",
        mobile:""
      }
    }
  },
  async created(){
    console.log("this",this)
    var uid = this.$store.state.uid
    const userinfo = await api.userzone.userinfo(uid)
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