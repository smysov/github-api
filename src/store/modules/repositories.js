import axios from '@/plugins/axios';

const repositoriesStore = {
  state: {
    isShowRepos: false,
    repositories: [],
  },
  mutations: {
    SET_SHOW_REPOS(state) {
      state.isShowRepos = !state.isShowRepos;
    },
    SET_REPOSITORIES(state, repos) {
      state.repositories = repos;
    },
  },
  actions: {
    setShowRepos({ commit }) {
      commit('SET_SHOW_REPOS');
    },
    async setRepositories({ commit, dispatch }, login) {
      try {
        const response = await axios.get(`/users/${login}/repos?&per_page=100`);
        commit('SET_REPOSITORIES', response);
        dispatch('setLimitInitial', 5);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getShowRepos: ({ isShowRepos }) => isShowRepos,
    getRepositories: ({ repositories }) => repositories,
  },
};

export default repositoriesStore;
