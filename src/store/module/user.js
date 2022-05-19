import userApi from '@/api/user';
import authUtils from '@/utils/auth';

const state = {
    token: authUtils.getToken()
}

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
    }
}

const actions = {
    async login({ commit }, userInfo) {
        const { username, password } = userInfo;

        let token = await userApi.login(username, password);

        commit('SET_TOKEN', token);

        authUtils.setToken(token);
    },

    logout({ dispatch }) {
        dispatch('resetToken');
    },

    resetToken(){
        commit('SET_TOKEN', '');

        authUtils.removeToken();
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}