export default {
  //基本信息
  async userinfo(uid) {
    const response = await axios.get('/personalCenter/basicMessage',{params: {uid:uid}});
    return response.data;
  },
  //修改密码
  async editPassword(form) {
    const response = await axios.get('/personalCenter/updatePassword',{params: {uid:form.uid,mobile:form.mobile,code:form.code,newPassword:form.newPassword}});
    return response.data;
  },
  //我的会员1 微信 2 支付宝  
  async memberShopList() {
    const response = await axios.get('/chi/member/memberShopList');
    return response.data;
  },
  async pay(payType,shopNumber) {
    const response = await axios.get('/chi/member/buyMember',{params: {payType:payType,shopNumber:shopNumber}})
    return response;
  },
  //地址列表模块
  //获得省名
  async pay(payType,shopNumber) {
    const response = await axios.get('/chi/member/buyMember',{params: {payType:payType,shopNumber:shopNumber}})
    return response;
  },
  //获得市名
  async getAddressProvince(payType,shopNumber) {
    const response = await axios.get('/chi/member/buyMember',{params: {payType:payType,shopNumber:shopNumber}})
    return response;
  },
  //获得区县
  async getAddressCity(payType,shopNumber) {
    const response = await axios.get('/chi/member/buyMember',{params: {payType:payType,shopNumber:shopNumber}})
    return response;
  },
}