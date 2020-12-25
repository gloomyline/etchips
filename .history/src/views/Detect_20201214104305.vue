<template lang="html">
  <div class="detect">
    <!-- <eheader></eheader> -->
   <et-header></et-header>
    <et-nav></et-nav>
    <div class="detect-content">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" label-position="left">
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
      </el-form>
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
        brand: null,
        coo: null,
        dc: null,
        materialNumber: null,
        mobile: null,
        name: null,
      },
      rules: {
        brand: [{ required: true, trigger: 'blur', message: '请输入品牌' }],
        coo: [{ required: true, trigger: 'blur', message: '请输入产地' }],
        dc: [{ required: true, trigger: 'blur', message: '请输入dc' }],
        materialNumber: [{ required: true, trigger: 'blur', message: '请输入料号' }],
        mobile: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
        name: [{ required: true, trigger: 'blur', message: '请输入姓名' }],
      },
      loading: false,
    };
  },
  methods: {
    async submit() {
      const self = this;
      const validation = await this.$refs.form.validate();
      if (!validation) return;
      this.loading = true;
      const response = await api.home.detect(this.form);
      if (response.success) {
        this.$message({
          type: 'success',
          message: response.msg,
          onClose() {
            self.$refs.form.resetFields();
          },
        });
      } else {
        this.$message({
          type: 'error',
          message: response.msg,
        });
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="stylus">
.detect
  .detect-content
    width: 60%
    height: 500px
    max-width: 600px
    margin: 20px auto 0 auto
</style>
