<template lang="html">
  <div class="container">
    <eheader ></eheader>


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
      position:relative;
      width:500px;
      left:0;
      right:0;
      margin:30px auto;

    }
  }

}
</style>
