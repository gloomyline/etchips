const { axios } = window;

export default {
  async fetchCarousels() {
    const response = await axios.get('/chi/homePage/free/list');
    return response.data;
  },
  async fetchBrands(material) {
    const response = await axios.get('/chi/homePage/free/findAllBrands',{ params: { material: material } });
    return response.data;
  },
  async search(payload) {
    const response = await axios.post('/chi/homePage/free/search', payload);
    return response;
  },
  async fetchMaterial(payload) {
    const response = await axios.post('/chi/homePage/free/getMaterial', payload);
    return response.data;
  },
  async commitAdvices(payload) {
    const response = await axios.post('/chi/homePage/free/sendOperProposal', payload);
    return response;
  },
  async detect(payload) {
    const response = await axios.post('/chi/homePage/entrustCheck', payload);
    return response;
  },
  async detectedDownload(payload) {
    const response = await axios.post('/chi/homePage/free/download', payload);
    return response;
  },
  async dataApply(payload) {
    const response = await axios.post('/chi/homePage/saveCustomize', payload);
    return response;
  },
};
