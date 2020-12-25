<template>
  <div class="wrapper">
    <div class="wrapper-container">
     <ul>
       <li>
         <i class="el-icon el-icon-picture"></i><br>
         <em class="title">已有样式数量</em><br>
         <em class="number">3500</em>
       </li>
       <li>
          <i class="el-icon el-icon-s-cooperation"></i><br>
         <em class="title">客户合作</em><br>
         <em class="number">2000</em>
       </li>
       <li>
          <i class="el-icon el-icon-s-claim"></i><br>
         <em class="title">验真次数</em><br>
         <em class="number">6500</em>
       </li>
       <li>
          <i class="el-icon el-icon-s-opportunity"></i><br>
         <em class="title">委托测试</em><br>
         <em class="number">4000</em>
       </li>
     </ul>
      
    </div> 
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  position: relative;
  height:150px;
  // background:#aaa;
  // background-image: linear-gradient(#eee, #fff);
  .wrapper-container{
    position: absolute;
    left:0;
    right:0;
    background-image: linear-gradient(to right,#667eea,#764ba2 );
    margin:0 auto;
    width:1164px;
    border-radius: 20px;
    height:150px;
    padding-top:25px;
    ul{
      display:flex;
      justify-content: center;
      align-items: center;
      li{
        flex:1;
        color:#fff;
        text-align: center;
        .el-icon{
          color:#fff;
          font-size:40px;
        }
        em.title {
          display: inline-block;
          height:20px;
          line-height: 20px;
          font-size:15px;
        }
        em.number{
          font-family: "DINPro";
          font-size:30px;
        }
        
      }
    }
    
  }
}
</style>