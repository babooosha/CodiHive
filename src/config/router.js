import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import Projects from '@/components/MenuPages/Projects.vue'
import Clients from '@/components/MenuPages/Clients.vue'
import DropZone from '@/components/MenuPages/DropZone.vue'

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
        name: 'Projects',
        component: Projects,
        path: '/projects',
    },

    {
        name: 'Clients',
        component: Clients,
        path: '/clients',
    },

    {
        name: 'DropZone',
        component: DropZone,
        path: '/drop-zone',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router