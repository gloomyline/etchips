 <template >
  <div class="container">


    <eheader ></eheader>
    <div class="wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据申请</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content">
        <div class="title">
          <i class="iconfont icon-shuxian1"></i> 数据申请
        </div>
        <div class="subtitle">
          申请数据提交成功后，我们及时响应您的数据申请，请您耐心等待。
        </div>
        <div class="form">
          
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
            

           
            
            <!-- <el-form-item label="检测项">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="外观检测" name="type" border></el-checkbox>
                <el-checkbox label="X-ray" name="type" border></el-checkbox>
                <el-checkbox label="de-cap(开盖)" name="type" border></el-checkbox>
              </el-checkbox-group>
            </el-form-item> -->
            <!-- <el-form-item label="检测项" prop="checkeditems">
              <el-checkbox-group v-model="ruleForm.checkeditems"   >
                <!-- <el-checkbox label="外观检测" name="type" border></el-checkbox>
                <el-checkbox label="X-ray" name="type" border></el-checkbox>
                <el-checkbox label="de-cap(开盖)" name="type" border></el-checkbox> -->
                <el-checkbox v-for="item in ruleForm.items" name="type" :key = "item.content" :disabled="item.disabled"  :label="item.id" border @change="">{{item.content}}</el-checkbox>

              </el-checkbox-group>
            </el-form-item> 
            <!-- {{ruleForm.checkeditems}} -->
            <!-- <el-form-item label="是否寄回" prop="back">
              <el-radio-group v-model="ruleForm.back" size="medium" @change="backHandler">
                <el-radio border v-for="item in ruleForm.isback" :label="item.id" :disabled="item.disabled" :key="item.id">{{item.content}}</el-radio>
                <!-- <el-radio border label="不寄回"></el-radio>
                <el-radio border label="寄回" ></el-radio>
              </el-radio-group>
            </el-form-item> -->
            <!-- {{ruleForm.back}} -->
            <!-- <el-form-item label="是否寄回">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item> -->
            <el-form-item label="料号" prop="materialNumber">
              <el-input v-model="ruleForm.materialNumber"></el-input>
            </el-form-item>
            <el-form-item label="品牌"  prop="brandName">
              <el-input v-model="ruleForm.brandName"></el-input>
            </el-form-item>
            <el-form-item label="供应商"  prop="supplier">
              <el-input  v-model="ruleForm.supplier"></el-input>
            </el-form-item>
            <el-form-item>
              <!-- <el-button type="primary" @click="onSubmit">提交委托测试</el-button> -->
               <el-button type="primary" @click="submitForm('ruleForm')" :loading="loading">提交数据申请</el-button>
               <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
            </el-form-item>
          </el-form>
          
        </div>
        
      </div>
    </div>
    <efooter></efooter>


   <!-- <et-header></et-header>
    <et-nav></et-nav>
    <div class="detect-content"> -->
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
    <!-- </div>
    <et-footer></et-footer>  -->
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'Detect',
  data() {
    return {
      
      ruleForm: {
        // type: [],
        // checkeditems:[],
        // items: [
        //   {id:1,disabled:false,content:"外观检测",value:1},
        //   {id:2,disabled:false,content:"X-ray",value:2},
        //   {id:3,disabled:false,content:"de-cap(开盖)",value:3},
        // ],

        // back: '',
        // isback:[
        //   {id:5,disabled:false,content:"不寄回"},
        //   {id:4,disabled:false,content:"寄回"},
        // ],
        userName:'lll2020',
        materialNumber: '',
        brandName: '',
        // delivery: false,
        
        supplier: ''
      },
      rules: {
        // checkeditems:[
          // { required: true, message: '请选择检测项', trigger: 'change' },
          // {validator:function(rule,value,callback){
          //     console.log("rulevaluecallback",rule)
          //     console.log("")
          //     if(!this.checkeditems){
          //       console.log("itemvalue",value)
          //     }else{
          //       console.log("itemvalue没有值")
          //     }
          //     return true
              
          // }, trigger: 'change'}
        // ],
        // back: [{ required: true, message: '请选择是否寄回', trigger: 'change' }],
        materialNumber: [{required: true, message: '请输入料号', trigger: 'blur'}],
        brandName: [{ required: true, message: '请输入品牌', trigger: 'blur' }],
        supplier: [{ required: true, message: '请输入供应商', trigger: 'blur' }],
        // remark: [{ required: true, message: '请输入称', trigger: 'blur' }],
      },

      // form: {
      //   brand: null,
      //   coo: null,
      //   dc: null,
      //   materialNumber: null,
      //   mobile: null,
      //   name: null,
      // },
      // rules: {
        // brand: [{ required: true, trigger: 'blur', message: '请输入品牌' }],
        // coo: [{ required: true, trigger: 'blur', message: '请输入产地' }],
        // dc: [{ required: true, trigger: 'blur', message: '请输入dc' }],
        // materialNumber: [{ required: true, trigger: 'blur', message: '请输入料号' }],
        // mobile: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
        // name: [{ required: true, trigger: 'blur', message: '请输入姓名' }],
      // },
      loading: false,
    }
  },

  methods: {
    backHandler(val){
      console.log("backval",val)
      
    },
    async submitForm(formName) {
      console.log("我进来了")
      // console.log("this.$refs[formName]",this.$refs[formName])
      // console.log("this.form",this.ruleForm)
      const self = this;
      console.log("validate",this.$refs.ruleForm.validate())
      var  validation
      this.$refs.ruleForm.validate((res)=>{
         validation = res
        console.log("res",res)
      })
      // const validation = this.$refs.ruleForm.validate((valid)=>{
      //   return valid
      // });
      // debugger;
      if (!validation){ 
        return
      }
      this.loading = true;
      console.log("this.ruleForm",this.ruleForm)
      const response = await api.dataapply.dataapply(this.ruleForm);
      console.log("response",response)
      // this.$message({
      //     type: 'success',
      //     message: response,
      //     onClose() {
      //       self.$refs.ruleForm.resetFields();
      //     },
      // });
      if (response.success){
        this.$message({
          type: 'success',
          message: response.msg,
          onClose() {
            self.$refs.ruleForm.resetFields();
          },
        });
      }else{
        this.$message({
          type: 'error',
          message: response.msg,
        });
      }
      this.loading = false;
      // this.$refs[formName].validate((error,ab,abc) => {
        // console.log("valid1111111",valid)
        // console.log("参数",error,ab,abc)
        // if (valid) {
        //   self.$message({
        //   type: 'success',
        //   message: "1532541235",
          // onClose() {
          //   self.$refs.form.resetFields();
          // },
      //   });

      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm.checkeditems = []
    }
    
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
      position:static;
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
          font-size:16px;
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
      position:relative;
      width:500px;
      left:0;
      right:0;
      margin:30px auto;

    }
  }

}
</style>
