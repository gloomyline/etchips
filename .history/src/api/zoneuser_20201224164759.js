export default {
  async mymymy() {
    const response = await this.$axios.get('/chi/homePage/free/list');
    return response.data;
  },
}