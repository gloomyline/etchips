<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <div class="title">
        <div class="content">
          <div class="arrowLeft"></div>
          <div class="words">
            热门物料检索<br>
            <span>最近热门物料检索信息次数</span>
          </div>
          <div class="arrowRight"></div>
        </div>
      </div>
      <div class="wrapper-content">
        <ul>
          <li class="li1">
            RB541XNTR
            <div class="number">1534</div>
          </li>
          <li class="li2">
            RB496EATR
            <div class="number">2568</div>
          </li>
          <li class="li3">
            RB480Y-90T2R  
            <div class="number">3278</div>
          </li>
          <li class="li4">
            RB715WMTL
            <div class="number">2666</div>
          </li>
          <li class="li5">
            GBU606-G 
            <div class="number">2569</div>
          </li>
          <li class="li6">
            GBU802-G
            <div class="number">5844</div>
          </li>
         
        </ul>
        
        
      </div>
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
  height:615px;
  // background:#aaa;
  background-image: linear-gradient(#eee, #fff);
  .wrapper-container{
    position: absolute;
    left:0;
    right:0;
    margin:0 auto;
    width:1164px;
    height:615px;
    padding-top:60px;
    .title{
      // margin-top:30px;
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
        color:#676767;
        text-align: center;
        font-size:30px;
        height:50px;
        width:250px;
        span {
          font-size:16px;
          color:#ababab
        }
      }
      
    }
    .wrapper-content{
      height:450px;
      position: relative;
      ul{
        // position:absolute;
        z-index: 9999;
        li{
          position:absolute;
          height:100px;
          border-left:1px solid #cfcfcf;
          padding-left:10px;
          width:200px;
          font-size:16px;
          font-weight:bold;
          color:#999;
          .number{
            font-family: "DINPro";
            font-size:30px;
            // font-weight: 600;
            color:#de4133
          }
          &.li1{
            top:300px;
            left:300px;
    
          }
          &.li2{
            top:200px;
            left:400px;
    
          }
          &.li3{
            top:140px;
            left:580px;
    
          }
          &.li4{
            top:220px;
            left:680px;
    
          }
          &.li5{
            top:300px;
            left:550px;
    
          }
          &.li6{
            top:280px;
            left:850px;
    
          }
        }
      }
      
      
    }
    .wrapper-content::after{
      
      content: "";
      display: block;
      background: url('../../common/images/hotsearch.png') no-repeat;
      opacity: 0.2;
      background-position-y: bottom;
      height:475px;
      z-index: 99;  
    }
      
  }
}
</style>