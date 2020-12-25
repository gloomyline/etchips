export default {
  async mymymy() {
    const response = await $axios.get('/chi/homePage/free/list');
    return response.data;
  },
}