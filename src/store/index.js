import Vue from 'vue';
import Vuex from 'vuex';
import game from './module/game';
import user from './module/user'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    game,
    user
  },
})

export default store