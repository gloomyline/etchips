export default {
  async memberShopList() {
    const response = await axios.get('/chi/member/memberShopList',{params: {payType:1,shopNumber:20}});
    return response.data;
  },
  async mymymy() {
    const response = await axios.get('/chi/member/buyMember',{params: {payType:1,shopNumber:"ME2020110611155524562"}});
    return response.data;
  },
}