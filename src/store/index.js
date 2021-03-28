import Vue from 'vue';
import Vuex from 'vuex';

import axios from '@/plugins/axios';

Vue.use(Vuex);

export default new Vuex.Store({
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
    async getUsers({ commit, state }) {
      try {
        const response = await axios.get(`/search/users?q=${state.search}&per_page=100`);
        commit('SET_USERS', response.items);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getSearch: ({ search }) => search,
    getUsers: ({ users }) => users,
  },
});
