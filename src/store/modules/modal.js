const modalStore = {
  state: {
    isShowModal: false,
    isInfoUser: true,
  },
  mutations: {
    SET_IS_SHOW_MODAL(state, boolean) {
      state.isShowModal = boolean;
    },
    SET_IS_INFO_USER(state, boolean) {
      state.isInfoUser = boolean;
    },
  },
  actions: {
    changeIsShowModal({ commit }, boolean) {
      commit('SET_IS_SHOW_MODAL', boolean);
    },
    changeIsInfoUser({ commit }, boolean) {
      commit('SET_IS_INFO_USER', boolean);
    },
  },
  getters: {
    getIsShowModal: ({ isShowModal }) => isShowModal,
    getisInfoUser: ({ isInfoUser }) => isInfoUser,
  },
};

export default modalStore;
