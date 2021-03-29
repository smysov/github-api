import axios from '@/plugins/axios';

const searchStore = {
  state: {
    search: '',
    users: null,
  },
  mutations: {
    SET_SEARCH(state, value) {
      state.search = value;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    setSearch({ commit }, value) {
      commit('SET_SEARCH', value);
    },
    async getUsers({ commit, dispatch, state }) {
      dispatch('setLoader', true);
      try {
        const response = await axios.get(`/search/users?q=${state.search}&per_page=100`);
        commit('SET_USERS', response.items);
        dispatch('setLimitInitial', 12);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch('setLoader', false);
      }
    },
  },
  getters: {
    getSearch: ({ search }) => search,
    getUsers: ({ users }) => users,
  },
};

export default searchStore;
