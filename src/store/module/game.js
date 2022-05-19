import levelApi from '@/api/level'

let ws;

let gameState = () => {
    return {
        levelInfo: {
            title: "",
            describes: "",
            videoSrc: "",
            steps: [],
            timeLimit: 0
        },
        curSteps: [],
        errNums: 0,
        successNums: 0,
        time: 0,
        score: 0,
        hint:'init',//Boolean(true):正确 , Boolean(false):错误
        status: 'pending'//pending , ready , start , stop , over , success
    }
}

let state = gameState();

let mutations = {
    reset_state(state) {
        Object.assign(state, gameState())
    },
    set_levelInfo(state, info) {
        state.levelInfo = info;
    },
    set_curSteps(state, steps) {
        state.curSteps = steps;
    },
    add_errNums(state) {
        state.errNums += 1;
    },
    add_successNums(state) {
        state.successNums += 1;
    },
    add_time(state) {
        state.time += 1;
    },
    set_score(state, score) {
        state.score = score;
    },
    set_hint(state , hint) {
        state.hint = hint;
    },
    set_status(state, status) {
        state.status = status;
    },
}

let actions = {
    async gameInit({ commit }, levelId) {
        try {
            commit('reset_state');
            const levelInfo = await levelApi.getInfo(levelId);

            commit('set_levelInfo', levelInfo);
            commit('set_curSteps', levelInfo.steps);
            commit('set_status', 'ready');
        } catch (e) { throw e }
    },

    gameStart({ commit, dispatch }) {
        commit('set_status', 'start');
        dispatch('listenHit');
        dispatch('timing');
    },

    listenHit({ state, commit, dispatch }) {
        ws = new WebSocket("ws://127.0.0.1:8080");
        ws.onmessage = ({ data: curStepProp }) => {
            
            if (curStepProp === state.curSteps[0].prop) {
                commit('add_successNums');
                commit('set_hint' , new Boolean(true));
                commit('set_score', Number.parseFloat((100 / state.levelInfo.steps.length) * state.successNums).toFixed());
            } else {
                commit('add_errNums');
                commit('set_hint' , new Boolean(false));
            }
            commit('set_curSteps', state.curSteps.slice(1));

            if (!state.curSteps.length) {
                if (state.score >= 50) dispatch('gameSuccess');
                else dispatch('gameOver');
            }
        };
    },

    timing({ commit, state, dispatch }) {
        let timer = setInterval(() => {
            if (state.status === 'stop' || state.status === 'over' || state.status === 'success') clearInterval(timer);
            else if (state.time >= state.levelInfo.timeLimit) dispatch('gameOver');
            else commit('add_time');
        }, 1000)
    },

    gameStop({ commit }) {
        ws && ws.close();
        commit('set_status', 'stop');
    },

    gameOver({ commit }) {
        ws && ws.close();
        commit('set_status', 'over');
    },

    gameSuccess({ commit }) {
        ws && ws.close();
        commit('set_status', 'success');
    },

    async gameReload({ dispatch }, levelId) {
        try {
            await dispatch('gameInit', levelId);
            dispatch('gameStart')
        } catch (e) { throw e }
    }

}

let getters = {
    progress(state) {
        const total = state.levelInfo.steps.length,
            cur = state.curSteps.length;

        return total &&  Number.parseInt((total - cur) *(100 / total));
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}