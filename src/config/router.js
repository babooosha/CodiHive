import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router