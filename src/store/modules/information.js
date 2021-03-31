import axios from '@/plugins/axios';

const informationStore = {
  state: {
    user: {},
  },
  mutations: {
    SET_INFO_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getUser({ commit, dispatch }, login) {
      dispatch('setLoader', true);
      try {
        const response = await axios.get(`/users/${login}`);
        commit('SET_INFO_USER', response);
        dispatch('changeIsInfoUser', true);
      } catch (error) {
        if (error.response.status === 403) {
          dispatch('changeIsShowModal', true);
          dispatch('changeIsInfoUser', false);
        }
      } finally {
        dispatch('setLoader', false);
      }
    },
  },
  getters: {
    getUserInfo: ({ user }) => user,
  },
};

export default informationStore;
