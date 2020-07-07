const { axios } = window;

export default {
  async fetchCarousels() {
    const response = await axios.get('/chi/homePage/free/list');
    return response.data;
  },
};
