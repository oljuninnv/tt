import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import Home from "../components/HomeComponent.vue"
import About from "../views/About.vue"

const routes = [
    {
        path: '/', name: 'Home',component:Home
    },
    {
        path: '/about', name: 'About',component:About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
    
})

export default router