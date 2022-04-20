import VueRouter from "vue-router";
const LoginPage = () => import(/* webpackChunkName: "LoginPage" */ '@/page/login');
const MainPage = () => import(/* webpackChunkName: "MainPage" */'@/page/main');
const HomePage = () => import(/* webpackChunkName: "HomePage" */'@/page/home');
const LevelPage = () => import(/* webpackChunkName: "LevelPage" */'@/page/level');
const VideoPage = () => import(/* webpackChunkName: "VideoPage" */'@/page/video');
const LearningPage = () => import(/* webpackChunkName: "LearningPage" */'@/page/learning');

let routes = [
    {
        name: 'LoginPage',
        path: '/login',
        component: LoginPage
    },
    {
        path: '/',
        component: MainPage,
        redirect: {
            name: 'HomePage'
        },
        children: [
            {
                name: 'HomePage',
                path: 'home',
                component: HomePage
            },
            {
                name: 'LevelPage',
                path: 'level',
                component: LevelPage
            },
            {
                name: 'VideoPage',
                path: 'video',
                component: VideoPage
            },
            {
                name: 'LearningPage',
                path: 'learning/:levelId/:subLevelId?',
                component: LearningPage
            }
        ]
    }
];

let router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;