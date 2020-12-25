<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-nav">
        <div class="menu">
          <ul>
              <li><a href="#">首页</a></li>
              <li><a href="#">委找检测</a></li>
              <li><a href="#">客户服务</a></li>
              <li><a href="#">原厂服务</a></li>
              <li><a href="#">联系我们</a></li>
          </ul>
          <div class="rights">
            ©2020  一探物料验真平台版权所有
          </div>
        </div>
        
       
      </div>
      <div class="hotline">
        客服热线：<br>
        <span>
          0755-26433662
        </span>
      </div>
      <div class="QRcode">
        <div>
          <img src="../../common/images/QRcode.jpg" alt="" >
          <div>扫一扫了解我们</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      input3:""
    }
  }
  
}
</script>
<style lang="scss" scoped>
.el-icon{
  font-size:16px;
}
.footer-wrapper{
  position:relative;
  background:#261b46;
  width:100%;
  height:200px;
  .footer-container{
    position:absolute;
    width: 1164px;
    right:0;
    left:0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .footer-nav{
      padding-top:50px;
      width:500px;
      display:flex;
      .menu{
        clear:both;
        ul{
          li{
            float:left;
            height:40px;
            padding:0 40px 0 0;
            a:link{
              text-decoration: none;
              color:#fff;
            }
            a:visited{
              text-decoration: none;
              color:#fff;
            }
            a:hover{
              text-decoration: underline;
              font-weight:700;
              color:#ff1949
            }
            
          }
        }
      }
      .rights{
        width:100%;
        color:#fff;
      }
      
    }
    .hotline{
      padding-top:50px;
      width:400px;
      color:#fff;
      span{
        display:block;
        margin-top:18px;
        font-family: "DINPro";
        font-size:30px;
        color:#fff;
      }

    }
    .QRcode{
      padding-top:50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color:#fff;
      font-size:14px;
      div{
        div{
          margin-top:5px;
        }
      }


      
    }
    

    
    

  }
  
}

</style>