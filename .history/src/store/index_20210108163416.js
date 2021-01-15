import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maxContrast: 3,
    contrasts: [],
    contrastives: [],
    contrastBarIsShown: false,
    uid:''
  },
  mutations: {
    setUsername(state,username){
      state.uid = username
    },
    addContrast(state, { imgUrl, brandName, materialNumber }) {
      const newContrast = { imgUrl, brandName, materialNumber };
      if (state.contrasts.length <= 0
        || (state.contrasts.length > 0
        && !state.contrasts.some((item) => item.materialNumber === materialNumber))) {
        state.contrasts.push(newContrast);
      }
    },

    delContrast(state, materialNumber) {
      const index = state.contrasts.findIndex((contrast) => contrast.materialNumber === materialNumber);
      if (index !== undefined) {
        state.contrasts.splice(index, 1);
      }
    },
    clearContrasts(state) {
      state.contrasts = [];
    },
    showContrastBar(state) {
      state.contrastBarIsShown = true;
    },
    hideContrastBar(state) {
      state.contrastBarIsShown = false;
    },
    updateContrastives(state, contrastives) {
      state.contrastives = contrastives;
    },
  },
  actions: {
    fetechContrastives({ state, commit }) {
      const contrastives = [];
      state.contrasts.forEach(async (contrast) => {
        const payload = { brandName: contrast.brandName, materialNumber: contrast.materialNumber };
        const contrastive = (await api.home.fetchMaterial(payload)).shift();
        contrastives.push(contrastive);
      });
      commit('updateContrastives', contrastives);
    },
  },
  modules: {
  },
});
