import router from "./router";
import store from './store';

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    const hasToken = store.state.user.token;

    if (hasToken) {
        if (to.path === '/login') next({ path: '/' })
        else next();
    } else {
        if (whiteList.indexOf(to.path) !== -1) next();
        else next({ path: '/login', query: { redirect: to } })
    }
})