<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>密码修改
      </div>
      <div class="content">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="form">
          <el-form-item label="手机号" prop="mobile">
            <el-input type="hidden" v-model="ruleForm.uid" style="display:none"></el-input>
            <el-input v-bind:value="ruleForm.filtermobile" disabled></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" >
            <el-col :span="16">
              <el-form-item >
                <!-- <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker> -->
                <el-input placeholder="请输入手机验证码" v-model="ruleForm.code"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" style="padding-left:20px;">
              <el-form-item >
                <el-button type="primary" @click="sendcode">发送验证码</el-button>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="密码" prop="newPassword">
            <el-input type="password" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="newPassword1">
            <el-input type="password" v-model="ruleForm.newPassword1" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
   
  </div>
</template>
<script>
import api from "@/api"
export default {
   data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.newPassword1 !== '') {
            this.$refs.ruleForm.validateField('newPassword1');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          newPassword: '',
          newPassword1: '',
          age: '',
          code:'',
          uid:'',
          mobile:'',
          filtermobile:''
        },
        rules: {

          newPassword: [
            { required:true, validator: validatePass, trigger: 'blur' }
          ],
          newPassword1: [
            {required:true, validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    async created(){
      this.ruleForm.uid = this.$store.state.uid
      const userinfo = await api.userzone.userinfo(this.ruleForm.uid)
      this.ruleForm.mobile =  userinfo.mobile
      this.ruleForm.filtermobile =  userinfo.mobile.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2")
      // this.ruleForm.mobile = userinfo.mobile
    },
    methods: {
      async submitForm(formName) {
        // api.userzone.editPassword(this.form)
        // var _this = this
        
        var vaild = await this.$refs[formName].validate().then()
        
        console.log("vaild111111",vaild)
        // if(!vaild) return
        // console.log("vaild2523452345",vaild)
        api.userzone.editPassword(this.ruleForm)
        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();

      },
      
      async sendcode(){
        const userinfo = await api.auth.fetchCode(this.ruleForm.mobile)
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
  }

}

</style>