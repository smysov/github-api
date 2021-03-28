import Vue from 'vue';
import Vuex from 'vuex';

import axios from '@/plugins/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
    users: null,
    limit: 12,
  },
  mutations: {
    SET_SEARCH(state, value) {
      state.search = value;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_LIMIT(state, number) {
      state.limit += number;
    },
    SET_LIMIT_INITIAL(state, number) {
      state.limit = number;
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
        commit('SET_LIMIT_INITIAL', 12);
      } catch (error) {
        console.log(error);
      }
    },
    setLimit({ commit }, number) {
      commit('SET_LIMIT', number);
    },
  },
  getters: {
    getSearch: ({ search }) => search,
    getUsers: ({ users }) => users,
    getLimit: ({ limit }) => limit,
  },
});
