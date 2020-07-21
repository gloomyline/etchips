const { axios } = window;

export default {
  async fetchCarousels() {
    const response = await axios.get('/chi/homePage/free/list');
    return response.data;
  },
  async search(payload) {
    const response = await axios.post('/chi/homePage/free/search', payload);
    return response;
  },
  async commitAdvices(payload) {
    const response = await axios.post('/chi/homePage/free/sendOperProposal', payload);
    return response;
  },
  async detect(payload) {
    const response = await axios.post('/chi/homePage/entrustCheck', payload);
    return response;
  },
};
