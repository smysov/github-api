const searchStore = {
  state: {
    isShowLoader: false,
  },
  mutations: {
    SET_LOADER(state, boolean) {
      state.isShowLoader = boolean;
    },
  },
  actions: {
    setLoader({ commit }, boolean) {
      commit('SET_LOADER', boolean);
    },
  },
  getters: {
    getLoader: ({ isShowLoader }) => isShowLoader,
  },
};

export default searchStore;
