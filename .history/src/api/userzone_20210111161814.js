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
      
  //     dataType:'json',
  //     data:address,
  //   })
  //   return response;
  // },
  //新增地址
  async saveAddress(address) {
    const response = await axios.get('/personalCenter/saveAddress',{params: {address:address}})
    return response;
  },
  //查看个人所有地址
  async allAddress(uid) {
    const response = await axios.get('/personalCenter/individualAddress',{params: {uid:uid}})
    return response;
  },
  //修改地址
  async updateAddress(address) {
    const response = await axios.get('/personalCenter/updateAddress',{params: {address:address}})
    return response;
  },
  //获取地址
  async getAddress(addressid) {
    const response = await axios.get('/personalCenter/getAddress',{params: {id:addressid}})
    return response;
  },
  //删除地址
  async delAddress(addressid) {
    const response = await axios.get('/personalCenter/delAddress',{params: {id:addressid}})
    return response;
  },
  //查看数据申请  0待审批  1 通过   2  未通过  3已撤回
  async showDataApply(uid) {
    const response = await axios.get('/personalCenter/dataApplication',{params: {uid:uid}})
    return response;
  },
  //删除数据申请
  async delDataApplication(id) {
    const response = await axios.get('/personalCenter/delDataApplication',{params: {id:id}})
    return response;
  },
  //发票管理
  //新增或修改发票  修改发票带参数id
  async addOrUpdate(invoicelist) {
    const response = await axios.get('/chi/invoice/addOrUpdate',{params: {
      id:invoicelist.id,
      company:invoicelist.company,
      taxNumber:invoicelist.taxNumber,
      type:invoicelist.type
    }})
    return response;
  },
  //查询所有的抬头
  async allAddress(uid) {
    const response = await axios.get('/chi/invoice/findList')
    return response;
  },
}