import axios from '@/plugins/axios';

const repositoriesStore = {
  state: {
    isShowRepos: false,
    repositories: [],
    currentSortName: 'name',
    currentSortDir: 'asc',
  },
  mutations: {
    SET_SHOW_REPOS(state) {
      state.isShowRepos = !state.isShowRepos;
    },
    SET_REPOSITORIES(state, repos) {
      state.repositories = repos;
    },
    SORT(state, value) {
      console.log(value);
      console.log(state.currentSortName);
      if (value === state.currentSortName) {
        state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc';
      }

      state.currentSortName = value;
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
        dispatch('changeIsInfoUser', true);
      } catch (error) {
        if (error.response.status === 403) {
          dispatch('changeIsShowModal', true);
          dispatch('changeIsInfoUser', false);
        }
      }
    },
    sort({ commit }, value) {
      commit('SORT', value);
    },
  },
  getters: {
    getShowRepos: ({ isShowRepos }) => isShowRepos,
    getRepositories: ({ repositories }) => repositories,
    getSortedRepositiries({ repositories, currentSortName, currentSortDir }) {
      return repositories.sort((a, b) => {
        let mod = 1;

        if (currentSortDir === 'desc') mod = -1;
        if (a[currentSortName] < b[currentSortName]) {
          return mod * -1;
        }
        if (a[currentSortName] > b[currentSortName]) {
          return mod * 1;
        }

        return 0;
      });
    },
  },
};

export default repositoriesStore;
