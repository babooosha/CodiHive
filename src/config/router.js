import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import Searches from '@/components/MenuPages/Searches.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },

    {
        name: 'Login',
        component: Login,
        path: '/login',
    },

    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },

    {
        name: 'Searches',
        component: Searches,
        path: '/searches',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router