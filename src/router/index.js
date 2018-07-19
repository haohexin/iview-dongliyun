import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login')
        },
        {
            path: '/locking',
            name: 'locking',
            component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('@/views/main'),
            children: [
                {path: 'home', title: {i18n: 'home'}, name: 'home', component: () => import('@/views/home/home2.vue')},
            ]
        },
        // {
        //     path: '/home',
        //     name: 'home',
        //     component: () => import('@/views/home')
        // },


    ]
})
