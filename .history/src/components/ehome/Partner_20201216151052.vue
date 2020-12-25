<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <div class="title">
        <div class="content">
          <div class="arrowLeft"></div>
          <div class="words">
            合作伙伴<br>
            <span>携手合作伙伴 共创双赢</span>
          </div>
          <div class="arrowRight"></div>
        </div>
      </div>
      <div class="wrapper-content">
        <template>
          <el-carousel :interval="4000"  height="146px">


            <el-carousel-item v-for="item in partner" :key="item">
              <div class="item" v-for="subitem in item">
                <!-- {{subitem}} -->
                <img :src="subitem" /> 
              </div>
            </el-carousel-item>
            <!-- <el-carousel-item>
              <div class="item">
                <img src="./../../common/images/partner/1.jpg">
              </div>
              <div class="item">
                <img src="./../../common/images/partner/2.jpg">
              </div>
              <div class="item">
                <img src="./../../common/images/partner/3.jpg">
              </div>
              <div class="item">
                <img src="./../../common/images/partner/5.jpg">
              </div>
              <div class="item">
                <img src="./../../common/images/partner/8.jpg">
              </div>
            </el-carousel-item> -->
            <!-- <el-carousel-item>
              <div class="item">
                <img src="./../../common/images/partner/6.jpg">
              </div>
              <div class="item">
                <img src="./../../common/images/partner/7.jpg">
              </div>
              <div class="item">
                <img src="./../../common/images/partner/8.jpg">
              </div>
              <div class="item">
                <img src="./../../common/images/partner/3.jpg">
              </div>
              <div class="item">
                <img src="./../../common/images/partner/1.jpg">
              </div>
            </el-carousel-item> -->
          </el-carousel>
        </template>
        
        <!-- <img src="./../../common/images/partner/1.jpg"> -->
        
      </div>
    </div> 
  </div>
</template>
<script>
import api from '@/api';
export default {
  data(){
    return {
      partner:[]
    }
  },
  async created(){
    // const data = await api.home.cooperationConnector()
    // console.log("合作伙伴",data)
    var data = [
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/171918_25461_TAcDPLi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"},
      {path: "http://login.honengelec.com:8106/data/test/2020/1204/17/174802_44686_EAdqICi.jpg"}
    ]
    var index = 1
    var temp=[]
    for(var i = 0;i < data.length; i++) {
      
      if(i%4 ==0){
        temp.push(data[i])
      }
      this.partner.push[temp]
      // console.log("data",data[i])

    }
    console.log(this.partner)
  },
  mounted(){

  }
}

</script>
<style lang="scss" scoped>
.wrapper{
  background:#f3f3f3;
}
::v-deep .el-carousel__container .el-carousel__item:nth-child(2n) {
    background-color: #f3f3f3;
}
::v-deep .el-carousel__container .el-carousel__item:nth-child(2n+1) {
    background-color: #f3f3f3;
}
::v-deep .el-carousel__item {
  display:flex;
  justify-content:space-between;
  background:red;
}
::v-deep .el-carousel__item .item{
  float:left;
  box-sizing: content-box;
  height:140px;
  width:200px;
  border:3px solid #eee;
  overflow: hidden;

}
::v-deep .el-carousel__item .item img{
  float:left;
  width:200px;
  overflow: hidden;

}
::v-deep .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  }
  
::v-deep .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  }
  
::v-deep .el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  }
.wrapper{
  position: relative;
  height:400px;
  // background:#aaa;
  // background-image: linear-gradient(#eee, #fff);
  .wrapper-container{
    position: absolute;
    left:0;
    right:0;
    margin:0 auto;
    width:1164px;
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
      position: relative;
    
      
     
      
      
    }
  
      
  }
}
</style>