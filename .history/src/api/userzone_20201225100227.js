import { resolve } from "core-js/fn/promise";

export default {
  //1 微信 2 支付宝  
  async memberShopList() {
    const response = await axios.get('/chi/member/memberShopList',{params: {payType:1,shopNumber:"ME2020110611155524562"}});
    return response.data;
  },
  async pay() {
    const response = await axios.get('/chi/member/buyMember',{params: {payType:2,shopNumber:"ME2020110611155524562"}}).then((res,rej)=>{
      console.log(res)
    })
    return response.msg;
  },
}