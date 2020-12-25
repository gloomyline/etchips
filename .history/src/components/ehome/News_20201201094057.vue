<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <div class="title">
        <div class="content">
          <div class="arrowLeft"></div>
          <div class="words">
            最新动态<br>
            <span>及时获得验真平台的最新信息</span>
          </div>
          <div class="arrowRight"></div>
        </div>
      </div>
      <div class="wrapper-content">
        <ul>
          <li>
            <div class="data">
              <div class="day">8</div>
              <div class="month">1月</div>
            </div>
            <div class="content">
              <div class="title">关于验直平台系统升级公告</div>
              <div class="describe">尊敬的新老客户：由于验真平台最近需要系统升级，升级时间为2020年11月26日9：00-12：00，给大家带来不便，敬请谅解</div>
            </div> 
          </li>
          <li>
            <div class="data">
              <div class="day">8</div>
              <div class="month">1月</div>
            </div>
            <div class="content">
              <div class="title">关于验直平台系统升级公告</div>
              <div class="describe">尊敬的新老客户：由于验真平台最近需要系统升级，升级时间为2020年11月26日9：00-12：00，给大家带来不便，敬请谅解</div>
            </div> 
          </li>
          <li>
            <div class="data">
              <div class="day">8</div>
              <div class="month">1月</div>
            </div>
            <div class="content">
              <div class="title">关于验直平台系统升级公告</div>
              <div class="describe">尊敬的新老客户：由于验真平台最近需要系统升级，升级时间为2020年11月26日9：00-12：00，给大家带来不便，敬请谅解</div>
            </div> 
          </li>
          <li>
            <div class="data">
              <div class="day">8</div>
              <div class="month">1月</div>
            </div>
            <div class="content">
              <div class="title">关于验直平台系统升级公告</div>
              <div class="describe">尊敬的新老客户：由于验真平台最近需要系统升级，升级时间为2020年11月26日9：00-12：00，给大家带来不便，敬请谅解</div>
            </div> 
          </li>
          <li>
            <div class="data">
              <div class="day">8</div>
              <div class="month">1月</div>
            </div>
            <div class="content">
              <div class="title">关于验直平台系统升级公告</div>
              <div class="describe">尊敬的新老客户：由于验真平台最近需要系统升级，升级时间为2020年11月26日9：00-12：00，给大家带来不便，敬请谅解</div>
            </div> 
          </li>
          <li>
            <div class="data">
              <div class="day">8</div>
              <div class="month">1月</div>
            </div>
            <div class="content">
              <div class="title">关于验直平台系统升级公告</div>
              <div class="describe">尊敬的新老客户：由于验真平台最近需要系统升级，升级时间为2020年11月26日9：00-12：00，给大家带来不便，敬请谅解</div>
            </div> 
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
  height:500px;
  // background:#aaa;
  // background-image: linear-gradient(#eee, #fff);
  .wrapper-container{
    position: absolute;
    left:0;
    right:0;
    margin:0 auto;
    width:1164px;
    height:500px;
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
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        li{
          width:570px;
          border:1px solid #f1f1f1;
          border-radius: 5px;
          padding:15px 20px;
          display:flex;
          justify-content:space-between;
          margin-bottom:10px;
          flex-wrap:wrap;
          &:nth-child(even){
            // background:brown;
            padding-left:10px;
            margin-left:10px; 
          }
          .data{
            float:left;
            width:50px;
            height:54px;
            .day{
              height:27px;
              line-height:27px;
              text-align: center;
              border-radius: 5px 5px 0 0;
              background:#f1edec;
              color:#888;
            }
            .month{
              height:27px;
              line-height:27px;
              text-align: center;
              border-radius: 0 0 5px 5px;
              background:#d5d1d1;
              color:#888
            }
            
          }
          .content{
            width:470px;
            float:left;
            height:54px;
            .title{
              color:#626262;
              font-size:16px;
              font-weight:bold;
              margin-bottom:6px;
              
            }
            .describe{
              color:#9e9e9e;
              font-size:14px;
            }
          }
        }
        li:hover{
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border:#ec9e9c solid 1px;
          .data{
            float:left;
            width:50px;
            height:54px;
            .day{
              height:27px;
              line-height:27px;
              text-align: center;
              border-radius: 5px 5px 0 0;
              background:#de4034;
              color:#fff;
            }
            .month{
              height:27px;
              line-height:27px;
              text-align: center;
              border-radius: 0 0 5px 5px;
              background:#c93b37;
              color:#fff
            }
            
          }
          .content{
            title{
              color:#e3402d;
            }
            
          }

        }
      }
      
     
      
      
    }
  
      
  }
}
</style>