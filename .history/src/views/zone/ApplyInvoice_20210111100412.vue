<template>
  <div class="contentwrapper">
    <div class="container">
      <div class="title">
        <span class="iconfont icon-shugang"></span>申请发票
      </div>
     <el-tabs type="border-card">
        <!-- <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 增值税电子普通发票    </span>
          我的行程
        </el-tab-pane> -->
        <el-tab-pane label="增值税纸质普通发票">
          <!-- 表单开始 -->
          
          <!-- 表单结束 -->
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__nav{
  display:flex;
  justify-content: center;
  background:#fff;
  border:1px solid #de4133;
  border-radius: 20px;


}
::v-deep .el-tabs--border-card > .el-tabs__header {
    background-color: transparent;
    border-bottom: none;
    margin: 0;
}
::v-deep .el-tabs--border-card {
    background: transparent;
    border: none; 
    box-shadow:none; 
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #fff;
    background-color: #de4133;
    border-right-color:transparent;
    border-left-color: transparent;
    border-radius: 20px;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item {
    transition:none;
    border: 1px solid transparent;
    margin-top: -1px;
    color: #909399;
}
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