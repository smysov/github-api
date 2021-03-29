import Vue from 'vue';
import Vuex from 'vuex';

import search from './modules/search';
import preloader from './modules/preloader';
import information from './modules/information';
import repositories from './modules/repositories';
import more from './modules/more';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    preloader,
    information,
    repositories,
    more,
  },
});
