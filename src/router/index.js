import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

let routes = [
    {
        name: 'LoginPage',
        path: '/login',
        component: () => import('@/page/login.vue')
    },
    {
        path: '/',
        component: () => import('@/page/main.vue'),
        redirect: {
            name: 'HomePage'
        },
        children: [
            {
                name: 'HomePage',
                path: 'home',
                component: () => import('@/page/home.vue')
            },
            {
                name: 'LevelPage',
                path: 'level',
                component: () => import('@/page/level.vue')
            },
            {
                name: 'VideoPage',
                path: 'video',
                component: () => import('@/page/video.vue')
            },
            {
                name: 'PilingGamePage',
                path: 'piling-game/:levelId',
                component: () => import('@/page/piling-game/index.vue')
            }
        ]
    }
];

let router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;