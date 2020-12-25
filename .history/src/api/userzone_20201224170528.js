export default {
  async mymymy() {
    const response = await axios.get('/chi/member/buyMember',{payType:1,shopNumber:20});
    return response.data;
  },
}