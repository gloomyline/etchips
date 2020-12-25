<template>
  <div class="contentwrapper">
    <div class="banner">
      <div class="info">
        Hi，甜橙<br>
        你的身份：<span>VIP会员</span><br>
        到期时间：2020-11-30
      </div>
    </div>
    <div class="container">
      <div class="title">
        <span class="iconfont icon-tubiao-shufu"></span>开通会员
        <span>(购买后会员后，到期时间将会顺延)</span>
      </div>
      <div class="pay">
        <ul>
          <li>
            <div class="month">一个月</div>
            <div class="price">￥<span>24</span></div>
            <div class="costprice">原价30</div>
            <div class="btn">立即续费</div>

          </li>
          <li>
            <div class="month">三个月</div>
            <div class="price">￥<span>82</span></div>
            <div class="costprice">原价98</div>
            <div class="btn">立即续费</div>

          </li>
          <li class="recommend">
            <div class="arrow">推荐</div>
            <div class="month">一年</div>
            <div class="price">￥<span>385</span></div>
            <div class="costprice">原价668</div>
            <div class="btn">立即续费</div>

          </li>
        </ul>
      </div>
      <img :src="imgdata" alt="">
      
    </div>
  </div>
</template>
<script>
import api from "@/api"
export default {
  data(){
    return {
      imgdata:""

    }
  },
  async created(){
    const member = await api.userzone.memberShopList()
    axios.get('/chi/member/buyMember',{params: {payType:2,shopNumber:"ME2020110611155524562"}}).then(res=>{
      console.log(res)
    })
    this.imgdata = res
    console.log("this.imgdata",this.imgdata)




   
  }

}
</script>
<style lang="scss" scoped>
  .contentwrapper{
    .banner {
      background: url('../../assets/zone/vipbanner.jpg');
      width:950px;
      height:142px;
      .info{
        color:#fff;
        line-height:20px;
        padding:35px;
        span{
          color:yellow;
          font-weight:bold;
        }
      }
    }
    .container{
      .title{
        font-size:20px;
        margin:30px 0 0 30px;
        color:#272626;
        .iconfont{
          color:#ff5b6c;
          font-size:20px;
          display: inline-block;
          width:30px;
        
        }
        span{
          color:grey;
          font-size:14px;
        }
      }
      .pay {
        // background:red;
        margin:40px 30px;
        ul {
          display:flex;
          justify-content: space-between;
          padding:0 50px;
          li {
            border:1px solid grey;
            width:190px;
            border-radius:10px;
            height:240px;
            border:1px solid #acacac;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .month{
              font-size:30px;
            }
            .price{
              font-size:24px;
              margin:5px 0;
              color:#3b3b3b;
              span{
                font-size:48px;
                font-family:Dinpro;

              }
            }
            .costprice{
              font-size:16px;
              color:#3b3b3b;
              text-decoration:line-through;
              margin:0 0 10px 0;

            }
            .btn {
              border-radius:30px;
              border:1px solid #f00;
              padding:10px 20px ;
              color:red;
              background:#fff;
            }
            .btn:hover{
              cursor: pointer;
              color:#fff;
              background:red;
            }

          }
          .recommend{
            background:#fde5cf;
            border:1px solid #e60012;
            position:relative;
            .arrow{
              position:absolute;
              width:70px;
              height:30px;
              background:#e60012;
              color:#fff;
              border-radius:10px 0 10px 0;
              top:0;
              left:0;
              text-align: center;
              line-height:30px;


            }
            .price{
              color:#e60012;
              span{
                font-size:48px;
                font-family:Dinpro;
                

              }
            }
           
          }
        }
      }
    }
  }
</style>
