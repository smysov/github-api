import Vue from 'vue';
import Vuex from 'vuex';

import search from './modules/search';
import preloader from './modules/preloader';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { search, preloader },
});
