import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from "../views/Home";
import DashBoard from "../views/dashboard/DashBoard";
import Rendimentos from "../views/rendimentos/Rendimentos";
import Perfil from "../views/perfil/Perfil";
import Sobre from "../views/perfil/About.vue";
import Organizacoes from "../views/organizacoes/Organizacoes";
import Servidores from "../views/servidores/Servidores"
import ServidorMunicipio from "../views/servidores/ServidorMunicipio"
import ServidorEstado from "../views/servidores/ServidorEstado.vue"
import Assinatura from "../views/assinatura/Assinatura.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/servidores',
        name: 'Servidores',
        component: Servidores,
    },
    {
        path: '/servidormunicipio',
        name: 'ServidorMunicipio',
        component: ServidorMunicipio
    },
    {
        path: '/servidorestado',
        name: 'ServidorEstado',
        component: ServidorEstado
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard
    },
    {
        path: '/rendimentos',
        name: 'Rendimento',
        component: Rendimentos
    },
    {
        path: '/organizacoes',
        name: 'Organizacoes',
        component: Organizacoes
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/assinatura',
        name: 'Assinatura',
        component: Assinatura
    },
    {
        path: '/about',
        name: 'About',
        component: Sobre
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
