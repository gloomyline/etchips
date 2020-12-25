<template >
  <div class="container">


    <eheader ></eheader>
    <div class="wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>委托测试</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content">
        <div class="title">
          <i class="iconfont icon-shuxian1"></i> 委托测试
        </div>
        <div class="subtitle">
          尊敬的客户：<br>
          委托检测订单提交后，请在 【个人中心 -> 检测订单】里查看进度，待审核人员“同意”后，便可进行下一步操作，请您耐心等待。
        </div>
        <div class="form">
          
          <el-form ref="form" :model="form" label-width="80px">
            

           
            
            <el-form-item label="检测项">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="外观检测" name="type" border></el-checkbox>
                <el-checkbox label="X-ray" name="type" border></el-checkbox>
                <el-checkbox label="de-cap(开盖)" name="type" border></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="检测项2">
              <el-checkbox-group v-model="form.checkeditems">
                <!-- <el-checkbox label="外观检测" name="type" border></el-checkbox>
                <el-checkbox label="X-ray" name="type" border></el-checkbox>
                <el-checkbox label="de-cap(开盖)" name="type" border></el-checkbox> -->
                <el-checkbox v-for="item in form.items"  border>{{item.content}}</el-checkbox>

              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="是否寄回">
              <el-radio-group v-model="form.back" size="medium" @change="backHandler">
                <el-radio border label="不寄回"></el-radio>
                <el-radio border label="寄回" ></el-radio>
              </el-radio-group>
            </el-form-item>
            
            <!-- <el-form-item label="是否寄回">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item> -->
            <el-form-item label="料号">
              <el-input v-model="form.material"></el-input>
            </el-form-item>
            <el-form-item label="品牌">
              <el-input v-model="form.brand"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input type="textarea" v-model="form.remark"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交委托测试</el-button>
            </el-form-item>

            {{form.type}} 
            {{form.items}}  
            {{form.checkeditems}}
       {{form.back}}  
       {{form.material}}   
        {{form.brand}}   
       
        
        {{form.remark}}   
          </el-form>
          
        </div>
        
      </div>
    </div>
    <efooter></efooter>


   <et-header></et-header>
    <et-nav></et-nav>
    <div class="detect-content">
      <!-- <el-form ref="form" :model="form" :rules="rules" label-width="100px" label-position="left">
        <el-form-item prop="brand" label="品牌：">
          <el-input v-model="form.brand" placeholder="请输入品牌"></el-input>
        </el-form-item>
        <el-form-item prop="coo" label="产地：">
          <el-input v-model="form.coo" placeholder="请输入产地"></el-input>
        </el-form-item>
        <el-form-item prop="dc" label="DC：">
          <el-input v-model="form.dc" placeholder="请输入DC"></el-input>
        </el-form-item>
        <el-form-item prop="materialNumber" label="料号：">
          <el-input v-model="form.materialNumber" placeholder="请输入料号"></el-input>
        </el-form-item>
        <el-form-item prop="mobile" label="手机号：">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="name" label="姓名：">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <div class="inline-center"><el-button type="primary" @click="submit" :loading="loading">提交</el-button></div>
      </el-form> -->
    </div>
    <et-footer></et-footer> 
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'Detect',
  data() {
    return {
      
      form: {
        type: [],
        checkeditems:[],
        items: [
          {disabled:false,content:"外观检测"},
          {disabled:true,content:"X-ray"},
          {disabled:false,content:"de-cap(开盖)"},
        ],
        back: '',
        material: '',
        brand: '',
        // delivery: false,
        
        remark: ''
      }

      // form: {
      //   brand: null,
      //   coo: null,
      //   dc: null,
      //   materialNumber: null,
      //   mobile: null,
      //   name: null,
      // },
      // rules: {
      //   brand: [{ required: true, trigger: 'blur', message: '请输入品牌' }],
      //   coo: [{ required: true, trigger: 'blur', message: '请输入产地' }],
      //   dc: [{ required: true, trigger: 'blur', message: '请输入dc' }],
      //   materialNumber: [{ required: true, trigger: 'blur', message: '请输入料号' }],
      //   mobile: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
      //   name: [{ required: true, trigger: 'blur', message: '请输入姓名' }],
      // },
      // loading: false,
    }
  },
  watch:{
    'form.back':{
      handler(newValue){
        console.log("newValue",newValue)

      }
    }
  },
  methods: {
    backHandler(val){
      console.log("backval",val)
    },
    onSubmit() {

      console.log('submit!');
    },
  }
    // async submit() {
    //   const self = this;
    //   const validation = await this.$refs.form.validate();
    //   if (!validation) return;
    //   this.loading = true;
    //   const response = await api.home.detect(this.form);
    //   if (response.success) {
    //     this.$message({
    //       type: 'success',
    //       message: response.msg,
    //       onClose() {
    //         self.$refs.form.resetFields();
    //       },
    //     });
    //   } else {
    //     this.$message({
    //       type: 'error',
    //       message: response.msg,
    //     });
    //   }
    //   this.loading = false;
    // },
  
};
</script>

<style lang="scss" scoped>
.container {
  background:#f7f7f7;
  position: relative;
  .wrapper{
    min-height: 700px;
    padding:20px 0;
    position: relative;
    width:1164px;
    left:0;
    right:0;
    margin:0 auto;
    .content {
      min-height: 700px;
      margin:20px 0;
      padding:50px 30px ;
      background:#fff;
      border:1px solid #e9e9e9;
      .title {
        // background:red;
        margin-top:10px;
        color:#9c9a9a;
        font-size:24px;
        height:30px;
        line-height:10px;
        font-weight: bold;
        padding:0;
        margin:0;
         .iconfont {
          font-size:22px;
          margin:0;
          padding:0;
          color:#de4133
        }
      }
      .subtitle{
        background:#ffffe7;
        border:1px solid #f9e9c5;
        padding:30px;
        line-height:30px;
        color:#706f6f;
        border-radius: 5px;
      }
    
    }
    .form {
      background:#fff;
    }
  }

}
</style>
