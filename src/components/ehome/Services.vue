<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <div class="title">
        <div class="content">
          <div class="arrowLeft"></div>
          <div class="words">
            我们的服务<br>
            <span>我们的服务宗旨我们的真心努力是为了您最大程度的满意</span>
          </div>
          <div class="arrowRight"></div>
        </div>
      </div>
      <div class="wrapper-content">
        <div class="middle">
          <div class="layout3">
            <div class="layout2">
              <div class="layout1"></div>
            </div>
          </div>
        </div>
        <div class="part top0 left80">
          <router-link :class="classMap('Detect')" to="/detect" tag="div">
          <div class="content">
            <div class="title">
              <div>
                
                  <div>委托检测</div>
                  <!-- <div class="subtitle">提供帮客户检测样品服务，注册客户进入订单流程，提交检测申请，快递发出样品，我司确认收到样品，形成检测报告，通知客户付款，客户可以下载报告</div> -->
                  <div class="subtitle">提供帮客户检测样品服务，注册客户进入订单流程，提交检测申请</div>
                
              </div>
            </div>
          </div>
          <div class="tubiao"><span class="iconfont icon-weituo1"></span></div>
          </router-link>
        </div>
        <div class="part top0 left784">
          <router-link :class="classMap('Customer')" to="/report-download" tag="div" >
          <div class="tubiao"><span class="iconfont icon-fuwu"></span></div>
          <div class="content textLeft">
            <div class="title">
              <div>
                
                  <div>客户服务</div>
                  <div class="subtitle">客户可以用一个提取码下载并查看委托检测物料的检测报告</div>
                
              </div>
            </div>
          </div>
          </router-link>
        </div>
        <div class="part top120 left20">
          <div class="content">
            <div class="title">
              <div>
                <div>数据申请</div>
                <div class="subtitle">注册用户可以申请系统补充某个型号的数据</div>
              </div>
            </div>
          </div>
          <div class="tubiao"><span class="iconfont icon-shujushenqingxuanzhong"></span></div>
        </div>
        <div class="part top120 left844">
          <!-- <div class="tubiao"><span class="iconfont icon-huiyuanfuwu"></span></div> -->
          <div class="tubiao"><span class="iconfont icon-duibi"></span></div>
          <div class="content textLeft">
            <div class="title">
              <div>
                <div>图片对比</div>
                <div class="subtitle">提供客户真实样品高清照片对比功能，可随意放大拖拽比较产品细节</div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="part top240 left80">
          <div class="content">
            <div class="title">
              <div>
                <div>原厂服务</div>
                <div class="subtitle">代客户联系供应商，提供原厂服务</div>
              </div>
            </div>
          </div>
          <div class="tubiao"><span class="iconfont icon-yuanchang"></span></div>
          <!-- <div class="tubiao"><span class="iconfont icon-duibi"></span></div> -->
        </div>
        <div class="part top240 left784">
          <div class="content textLeft">
            <div class="tubiao"><span class="iconfont icon-jiansuo2"></span></div>
            <div class="title">
              <div>
                <div>物料检索</div>
                <div class="subtitle">拥有海量、真实、清晰的物料样品图片库，方便客户慧眼识真</div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    classMap(routeName) {
      const currentRouteName = this.$route.name;
      if (routeName === 'Home' && (currentRouteName === 'SearchResults' || currentRouteName === 'GoodDetails')) {
        return { active: true };
      }
      return { active: routeName === this.$route.name };
    },
  }
}
</script>
<style lang="scss" scoped>

.wrapper{
  position: relative;
  height:615px;
  background:#fff;
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
        width:450px;
        span {
          font-size:16px;
          color:#ababab
        }
      }
      
    }
    .wrapper-content{
      height:450px;
      position:relative;
      .middle{
        position:absolute;
        top:50%;
        left:50%;
        margin-left:-170px;
        margin-top:-170px;
        .layout3{
          display:flex;
          justify-content: center;
          align-items: center;
          border-radius: 200px;
          height:340px;
          width:340px;
          background:#ebf3ff;
          .layout2 {
            display:flex;
            justify-content: center;
            align-items: center;
            border-radius: 200px;
            height:270px;
            width:270px;
            background:#cadefd;
            .layout1{
              border-radius: 100px;
              background: url('../../common/images/homeservice.jpg') no-repeat;
              height:200px;
              width:200px;
            }
          }
        }
      }
      .part{
        position:absolute;
        margin-top:60px;
        clear:both;
        .tubiao{
          float:left;
          height:80px;
          width:80px;
          // background:red;
          border-radius: 40px;
          // border:1px dashed gray;
          border:1px solid #5c5c9d;
          display: flex;
          justify-content: center;
          align-items: center;
          .iconfont{
            font-size:40px;
            color:#5c5c9d;
          }
        }
        .content{
          
          float:left;
          .title {
            display: flex;
            height: 80px;
            text-align: right;
            justify-content: center;
            align-items: center;
            div {
              font-size:20px;
              margin-right:10px;
              width:210px;
              color:#555;
              .subtitle{
                font-size:14px;
                margin-top:10px;
                color:#999
              }
            }
          } 
        }
        .content.textLeft {
          .title{
            text-align: left;
            div {
              margin-left:10px;
              div{
                margin-left:0;
              }
            }
          }
        }
      }
      .part:hover{
        cursor: pointer;
        
        .tubiao{
          background:#5c5c9d;
          .iconfont{
            color:#fff;
          }
        }
      }
      .part.top0.left80{
        top:0;
        left:80px;
      }
      .part.top120.left20{
        top:120px;
        left:20px;

      }
      .part.top240.left80{
        top:240px;
        left:80px;
      }
      .part.top0.left784{
        top:0;
        left:784px;
      }
      .part.top120.left844{
        top:120px;
        left:844px;

      }
      .part.top240.left784{
        top:240px;
        left:784px;
      }
    }
  }
}
</style>