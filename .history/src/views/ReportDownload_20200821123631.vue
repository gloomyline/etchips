<template lang="html">
  <div class="report-download">
    <et-header></et-header>
    <et-nav></et-nav>
    <div class="report-download-content">
      <el-form ref="downloadForm" :model="downloadForm" :rules="downloadRules" label-width="100px" label-position="left">
        <el-form-item prop="code" label="提取码">
          <el-input v-model="downloadForm.code" placeholder="请输入提取码"></el-input>
        </el-form-item>
        <div class="inline-center">
          <el-button type="success" @click="preview" :loading="previewing">预览</el-button>
          <el-button type="primary" @click="download" :loading="downloading">下载</el-button>
        </div>
      </el-form>
    </div>
    <et-footer></et-footer>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      downloadForm: {
        code: null,
      },
      downloadRules: {
        code: [{ required: true, trigger: 'blur', message: '请输入提取码' }],
      },
      downloading: false,
      previewing: false,
      report: {},
    };
  },
  methods: {
    async fetchReport() {
      const validation = await this.$refs.downloadForm.validate();
      if (!validation) return;
      const response = await api.home.detectedDownload(this.downloadForm);
      if (response.success) {
        this.$message({
          type: 'success',
          message: response.msg,
        });
        this.$set(this.report, `C${this.downloadForm.code}`, response.data);
      } else {
        this.$message({
          type: 'error',
          message: response.msg,
        });
      }
    },
    async download() {
      const currentCode = `C${this.downloadForm.code}`;
      if (!(currentCode in this.report)) {
        this.downloading = true;
        try {
          await this.fetchReport();
        } finally {
          this.downloading = false;
        }
      }
      const el = document.createElement('a');
      el.setAttribute('href', this.report[currentCode].download);
      el.setAttribute('download', 'download');
      el.click();
    },
    async preview() {
      const currentCode = `C${this.downloadForm.code}`;
      if (!(currentCode in this.report)) {
        this.previewing = true;
        try {
          await this.fetchReport();
        } finally {
          this.previewing = false;
        }
      }
      window.open(this.report[currentCode].view, '_blank');
    },
  },
};
</script>

<style lang="stylus" scoped>
.report-download
  .report-download-content
    width: 60%
    max-width: 600px
    margin: 20px auto 0 auto
</style>
