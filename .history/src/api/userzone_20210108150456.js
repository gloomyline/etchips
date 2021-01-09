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
  async getAddressProvince () {
    const response = await axios.get('/personalCenter/getAddressProvince')
    return response;
  },
  //获得市名 
  async getAddressCity (provinceid) {
    const response = await axios.get('/personalCenter/getAddressCity',{params: {id:provinceid}})
    return response;
  },
  //获得区县
  async getAddressArea(cityid) {
    const response = await axios.get('/personalCenter/getAddressArea',{params: {id:cityid}})
    return response;
  },
  //新增地址
  // async saveAddress(address) {
  //   console.log("adress.js",address)
  //   const response = await axios({
  //     method:'post',
  //     url:'/personalCenter/saveAddress',
  //     ContentType:application/x-www-form-urlencoded,
  //     dataType:'json',
  //     data:address,
  //   })
  //   return response;
  // },
  // async saveAddress(address) {
  //   console.log("adress.js",address)
  //   const response = await axios.post('/personalCenter/saveAddress',address)
  //   return response;
  // },
  async saveAddress(address) {
    const response = await axios.get('/personalCenter/saveAddress',{params: {address:address}})
    return response;
  },
  // async saveAddress(address) {
  //   const response = await axios.get('/personalCenter/saveAddress',{params: {address:address}})
  //   return response;
  // },
  // async saveAddress(address) {
  //   const response = await axios.post('/personalCenter/saveAddress',{params:{
  //     customer:address.customer,
  //     provinceName:address.provinceName,
  //     cityName:address.cityName,
  //     expAreaName:address.expAreaName,
  //     address:address.address,
  //     name:address.name,
  //     mobile:address.mobile,
  //     company:address.company
  //   }})
  //   return response;
  // },
}