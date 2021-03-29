const moreStore = {
  state: {
    limit: 12,
  },
  mutations: {
    SET_LIMIT(state, number) {
      state.limit += number;
    },
    SET_LIMIT_INITIAL(state, number) {
      state.limit = number;
      console.log(state.limit);
    },
  },
  actions: {
    setLimit({ commit }, number) {
      commit('SET_LIMIT', number);
    },
    setLimitInitial({ commit }, number) {
      commit('SET_LIMIT_INITIAL', number);
    },
  },
  getters: {
    getLimit: ({ limit }) => limit,
  },
};

export default moreStore;
