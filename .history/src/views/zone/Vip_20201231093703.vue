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
       
      <!-- <div class="" v-html="formdata" ref="alipayWap"></div> -->
      
      <div class="title">
        <span class="iconfont icon-tubiao-shufu"></span>开通会员
        <span>(购买后会员后，到期时间将会顺延)</span>
      </div>
      <div class="pay">
        <ul ref="addclassname"> 
          <li v-for= "item in priceList" :id="'id'+item.id" v-addclassname >
            <div class="arrow" >推荐</div>
            <div class="month">{{item.days | getMonth }}</div>
            <div class="price">￥<span>{{item.specialPrice}}</span></div>
            <div class="costprice">原价{{item.price}}</div>
            <div class="btn" @click="toPay(item.shopNumber,item.days,item.specialPrice)">立即续费</div>
          </li> 
           <!-- <li>
            <div class="month">一个月</div>
            <div class="price">￥<span>24</span></div>
            <div class="costprice">原价30</div>
            <div class="btn" >立即续费</div>

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
          </li> -->
        </ul>
      </div>
    
      <div class="title">
        <span class="iconfont icon-tubiao-shufu"></span>您的会员权益 
        <span>(购买后会员后，将获得相应的会员权益)</span>
      </div>

       
      <div class="member-rights">
        <ul>
          <li>
            <div class="icon">
              <span class="iconfont icon-tupian"></span>
            </div>
            <div class="name">查看B类图片</div>
          </li>
        </ul>
      </div>
      <div class="title">
        <span class="iconfont icon-tubiao-shufu"></span>权益详情
        <span>(查看相应的会员权益)</span>
      </div>
      <div class="rights-details">
        <ul>
          <li>
            <div class="icon">
              <span class="iconfont icon-tupian"></span>
            </div>
            <div class="details">
              <div class="titlename">查看B类图片</div>
              <div class="content">
                <span>权益对象：</span>VIP会员，钻石会员<br>
                <span>权益说明：</span>仅限一探验真新会员，开通会员成功后，即可查看B类图片
              </div>
            </div>
          </li>
        </ul>
      </div>

    
     


      
    </div>
    <!-- 支付对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" @close="closedialog" @open="opendialog">
      <el-form ref="form" :model="form">
        <el-radio-group v-model="form.payType" @change="payTypeChange">
          <el-radio label="1" border>微信扫码</el-radio>
          <el-radio label="2" border>支付宝扫码</el-radio>
          
        </el-radio-group>
        <el-form-item >
          <div>
            <div class="paymoney" v-html="paymoney"></div>
            <img v-if="imgdata" ref ="imgdata" src=""  width="200" >
          

          </div>
        </el-form-item>
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">关闭</el-button>
      </div> -->
    </el-dialog>

  </div>
</template>
<script>
import api from "@/api"
export default {
  data(){
    return {
      priceList:"",
      formdata:"",
      imgdata:true,
      money:"",
      paymoney:"2",
      // alipayWap:"",
      dialogFormVisible:false,
      dialogTitle:"",
      form:{
        payType:""
      },

    }
  },
  directives: {
    addclassname: {
      // 指令的定义
      inserted: function (el, binding) {
        // console.dir("el",el.title)
        // console.log("el.value",el.indexdata)
        // console.log("binding.name",binding.name)
        // el.className="recommend"
        if(el.id=="id3"){
          console.log("el3",el)
          el.className="recommend"
        }
      }
    }
  },
  filters:{
    getMonth(days){
      var month = parseInt(days/30)
      
      if(month == 1){
        return "一个月"
      }else if (month == 2){
        return "二个月"
      }else if (month == 3){
        return "三个月"
      }else if (month == 6){
        return "六个月"
      }else if (month == 12){
        return "一年"
      }
    }
  },
  async mounted (){
    const member = await api.userzone.memberShopList()
    console.log("member",member)
    this.priceList = member
    console.log("this.priceList",this.priceList)
   
    // console.log("this.imgdata",this.imgdata)
    // const response = await axios.get('/chi/member/buyMember',{params: {payType:2,shopNumber:"ME2020110611155524562"}}).then(res=>{
    //   console.log("res",res)
    // })

  },

  // mounted(){
  //   console.log("this.$refs.addclassname",this.$refs.addclassname)

  // },

  // watch:{
  //   'form.payType':{
  //     handler: function (val, oldVal) { 
  //       this.$refs.imgdata.src = ""
  //       console.log("val",val)
  //       if(val==="2"){
  //         this.feachQRcode(2,this.shopNumber,this.money)
  //       }

  //     },
  //   }
  // },
  methods: {
    //payType值触发事件
    payTypeChange(val){
      console.log("changeval",val)
      this.$refs.imgdata.src = ""
      if(val==="2"){
        this.feachQRcode(2,this.shopNumber,this.money)
      }
    },
    opendialog(){

    },
    closedialog(){
      this.form.payType=""
      this.$refs.imgdata.src = ""
      this.dialogFormVisible = false
      this.paymoney = ""
      // this.imgdata=false
      
    },

    // toAlipay () {
    //   axios.get('/chi/member/buyMember',{params: {payType:2,shopNumber:"ME2020110611155524562"}}).then (res => {
    //       this.alipayWap = res;
    //       this.$nextTick(() => {
    //             this.$refs.alipayWap.children[0].submit()
    //           })
    //   })
    // },
    async toPay(shopNumber,days,money){
      console.log("shopNumber,days,money",shopNumber,days,money)
      this.form.payType="2"
      var month = parseInt(days/30)
      var monthString
      if(month == 1){
        monthString = "续费一个月"
      }else if (month == 2){
        monthString = "续费二个月"
      }else if (month == 3){
        monthString = "续费三个月"
      }else if (month == 6){
        monthString = "续费六个月"
      }else if (month == 12){
        monthString = "续费一年"
      }
      this.money = money
      this.shopNumber = shopNumber
      console.log("shopNumbe",shopNumber)
      this.feachQRcode(this.form.payType,shopNumber,money)
      this.dialogTitle=`${monthString}会员`
      this.dialogFormVisible = true
    },
    //请求二维码
    async feachQRcode(payType,shopNumber,money){
      const res = await api.userzone.pay(payType,shopNumber)
      console.log("res",res)
      // this.imgdata = JSON.stringify(res.msg)
      // console.log("imgdata",this.imgdata)
      // console.log("imgdata类型",typeof this.imgdata)
      // console.log("res",res)
      // this.formdata = res;
      
      if(res.success){
        this.paymoney = `支付金额 <span>￥${money}</span>`
        this.imgdata = res.msg
        
        this.$refs.imgdata.src = this.imgdata
        console.log("this.$refs.imgdata",this.$refs.imgdata.src)
      }
     
    }
  }

}
</script>
<style lang="scss" scoped>
::v-deep .el-form-item{
  text-align: center;
  div{
    // position: relative;
    display: block;
    img{
      padding:0;
      // position:absolute
    }
    .paymoney{
      position:absolute;
      z-index:999;
      padding:0;
      margin:180px auto;
      left:0;
      right:0;
      padding-top:10px;
      span{
        color:red;
        font-weight:bold;
        font-size:16px;
      }
      // background:red
    }
  }
}
::v-deep .el-form-item__content{
  display: flex;
  justify-content: center;
  align-items: center;
  height:230px;
}
::v-deep .el-radio-group{
  display: flex;
  justify-content: center;
  align-items: center; 
}
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
        margin:20px 30px;
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
            .arrow{
              display:none
            }
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
              display:block;
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
      .member-rights{
        margin:30px 30px;
        ul{
          margin: 0 50px;
          li{
            font-size:14px;

            .icon{
              height:80px;
              width:80px;
              color:#fff;
              background:linear-gradient(to right,#fd7161, #fa4c48);
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius:10px;
              .iconfont{
                font-size:40px;
              }    
            }
            .name{
              margin-top:5px;
            }
          }
        }
      }
      .rights-details{
        margin:20px 30px;
        ul {
          padding:0 50px;
          li{
            display: flex;
            .icon{
              height:80px;
              width:80px;
              color:#fff;
              background:linear-gradient(to right,#fd7161, #fa4c48);
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius:10px;
              .iconfont{
                font-size:40px;
              }    
            }
            .details{
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left:10px;
              .titlename{
                font-size:16px;
                font-weight:bold;
                color:#c10f04;
                line-height:20px;
                text-align: left;
                display: flex;
                justify-content: left;
              }
              .content{
                color:#717171;
                font-size:14px;
                line-height:18px;
                span{
                  color:#000000;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
