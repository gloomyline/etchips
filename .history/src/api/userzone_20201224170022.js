export default {
  async mymymy() {
    const response = await axios.get('/chi/member/buyMember');
    return response.data;
  },
}