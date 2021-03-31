const modalStore = {
  state: {
    isShowModal: false,
  },
  mutations: {
    SET_IS_SHOW_MODAL(state, boolean) {
      state.isShowModal = boolean;
    },
  },
  actions: {
    changeIsShowModal({ commit }, boolean) {
      commit('SET_IS_SHOW_MODAL', boolean);
    },
  },
  getters: {
    getIsShowModal: ({ isShowModal }) => isShowModal,
  },
};

export default modalStore;
