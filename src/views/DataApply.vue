<template lang="html">
  <div class="data-apply">
    <et-header></et-header>
    <et-nav></et-nav>
    <div class="data-apply-content" style="margin-top: 30px;">
      <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="80px">
        <el-form-item prop="fullName" label="品牌：">
          <el-input v-model="form.fullName" placeholder="请输入品牌"></el-input>
        </el-form-item>
        <el-form-item prop="materialNumber" label="料号：">
          <el-input v-model="form.materialNumber" placeholder="请输入料号"></el-input>
        </el-form-item>
        <el-form-item prop="phoneNumber" label="手机号：">
          <el-input v-model="form.phoneNumber" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="remark" label="备注：">
          <el-input v-model="form.remark" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-form-item prop="supplierName" label="供应商：">
          <el-input v-model="form.supplierName" placeholder="请输入供应商"></el-input>
        </el-form-item>
        <div class="inline-center"><el-button type="primary" @click="submit">提交</el-button></div>
      </el-form>
    </div>
    <et-footer></et-footer>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'DataApply',
  data() {
    return {
      form: {
        fullName: null,
        materialName: null,
        remark: null,
        phoneNumber: null,
        supplierName: null,
      },
      rules: {
        fullName: [{ required: true, trigger: 'blur', message: '请输入品牌' }],
        materialName: [{ required: true, trigger: 'blur', message: '请输入料号' }],
        remark: [{ required: true, trigger: 'blur', message: '请输入备注' }],
        phoneNumber: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
        supplierName: [{ required: true, trigger: 'blur', message: '请输入供应商' }],
      },
    };
  },
  methods: {
    async submit() {
      const validation = await this.$refs.form.validate();
      if (!validation) return;
      const response = await api.home.dataApply(this.form);
      if (response.success) {
        this.$message({
          type: 'success',
          message: response.msg,
        });
      } else {
        this.$message({
          type: 'error',
          message: response.msg,
        });
      }
    },
  },
};
</script>

<style lang="stylus">
.data-apply
  .data-apply-content
    width: 60%
    max-width: 600px
    margin: 0 auto
</style>
