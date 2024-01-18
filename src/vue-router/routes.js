const routes = [
    {
        path: '/',
        name: 'home',
        title: '首页',
        meta:{
            title: '首页'
        },
        component: () => import('../components/demo/TheWelcome.vue'),
    },
    {
        path: '/login',
        name: 'login',
        title: '登陆',
        meta:{
            title: '登陆'
        },
        component: () => import('../components/demo/Home.vue'),
    }
]
export default routes