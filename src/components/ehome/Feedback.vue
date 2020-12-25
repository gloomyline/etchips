<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <div class="title">
        <div class="content">
          <div class="arrowLeft"></div>
          <div class="words">
            意见反馈<br>
            <span>如有问题请及时与我们联系</span>
          </div>
          <div class="arrowRight"></div>
        </div>
      </div>
      <div class="wrapper-content">
        <div class="info">
          <div class="title">
            为什么选择我们
          </div>
          <div class="subtitle">
            为您提供芯片查询验真服务，高效便捷准确的验证服务，针对不同类型的设计、不同复杂程度、不同集成度的设计，我们会考虑采用不同的验证方法。
          </div>
          <ul>
            <li>物料查询</li>
            <li>委托检测</li>
            <li>数据申请</li>
            <li>下载报告</li>
          </ul>
        </div>
        <div class="feedback">
           <el-form ref="form" label-position="left" label-width="60px" :model="form" :rules="rules">
        <el-row  >
         
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          
            <el-form-item label="建议" prop="advice">
              <el-input v-model="form.advice" type="textarea" maxlength="100" :rows="4" show-word-limit></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="commitAdvices" :loading="isCommiting">提交建议</el-button>
            </el-form-item>
         
        </el-row>
      </el-form>

        </div>
        
        
      </div>
    </div> 
  </div>
</template>
<script>
import api from '@/api';
export default {
  data(){
    return {
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        email: [{ required: true, trigger: 'blur', message: '请输入邮箱' }],
        phone: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
        advice: [{ required: true, trigger: 'blur', message: '请输入意见' }],
      },
      form: {
        name: '',
        email: '',
        phone: '',
        advice: '',
      },
      isCommiting: false,

    }
  },
  methods: {
    async commitAdvices() {
      const validation = await this.$refs.form.validate();
      if (!validation) return;
      this.isCommiting = true;
      const payload = {
        content: this.form.advice,
        customerName: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
      };
      const response = await api.home.commitAdvices(payload);
      if (response.success) {
        this.$message({
          message: response.msg,
          type: 'success',
        });
      } else {
        this.$message({
          message: response.msg,
          type: 'error',
        });
      }
      this.isCommiting = false;
      this.$refs.form.resetFields();
    },
  },
}
</script>
<style lang="scss" scoped>
::v-deep .el-form-item__label{
  color:#fff;
}
::v-deep .el-button--primary{
  background:#de4133;
  border:1px solid #de4133;
}
.wrapper{
  position: relative;
  height:540px;
  // background:#aaa;
  background:#4b4a88;
  .wrapper-container{
    // background: url('../../common/images/feedback.jpg') no-repeat;
    position: absolute;
    // background:red;
    left:0;
    right:0;
    margin:0 auto;
    width:1164px;
    height:540px;
    padding-top:60px;
    
    .title{
      // margin-top:30px;
      position:relative;
      z-index:888;
      .content{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom:30px;
      }
      .arrowLeft{
        float:left;
        background: url('../../common/images/arrowLeft.png') no-repeat;
        width:169px;
        height:50px;
      }
      .arrowRight{
        float:left;
        background: url('../../common/images/arrowRight.png') no-repeat;
        width:169px;
        height:50px;
      }
      .words {
        float:left;
        color:#fff;
        text-align: center;
        font-size:30px;
        height:50px;
        width:250px;
        span {
          font-size:16px;
          color:#fff
        }
      }
      
    }
    .wrapper-content{
      height: 450px;
      position: relative;
      z-index: 9999;
      .info{
        float:left;
        width:60%;
        .title{
          width:130px;
          font-size:18px;
          color:#fff;
          padding-bottom:10px;
          border-bottom:2px solid red;
        }
        .subtitle{
          margin-top:20px;
          padding-right:200px; 
          font-size:16px;
          color:#fff;
          line-height:30px;
        }
        ul li{
          color:#fff;
          padding:20px 30px 0 0;
        }

      }
      .feedback{
        float:left;
        width:35%;
      }
    }
  }
  .wrapper-container::after {
    content: "";
    display:block;
    width:1164px;
    position:absolute;
    top:0;
    display: block;
    background:red;
    background: url('../../common/images/feedback.jpg') no-repeat;
    opacity: 1;
    background-position-y: bottom;
    height:540px;
    overflow: hidden; 
  }
}
</style>