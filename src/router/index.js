import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
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
                component: () => import('@/page/video/list.vue')
            },
            {
                name: 'VideoCategoryPage',
                path: 'video-category',
                component: () => import('@/page/video/category.vue')
            },
            {
                name: 'PilingGamePage',
                path: 'piling-game/:levelId',
                component: () => import('@/page/piling-game/index.vue')
            },
            {
                name: 'LoginPage',
                path: '/login',
                component: () => import('@/page/login.vue')
            },
            {
                name: 'RankingPage',
                path: '/ranking',
                component: () => import('@/page/ranking.vue')
            }
        ]
    }
];

let router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;