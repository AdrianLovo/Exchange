import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Error from '@/views/Error';
import CoinDetail from '@/views/CoinDetail';

//Utilizar el Router
Vue.use(Router)

export default new Router({
    mode: 'history',     //Utilizar el history mode de html

    //Array de rutas
    routes:[
        {
            path: '/',          //Ruta
            name: 'home',       //Nombre
            component: Home     //Componente
        },
        {
            path: '/about',          //Ruta
            name: 'about',       //Nombre
            component: About     //Componente
        },
        {
            path: '*',          //Ruta
            name: 'Error',       //Nombre
            component: Error     //Componente
        },
        {
            path: '/coin/:id',          //Ruta dinamica
            name: 'coin-detail',       //Nombre
            component: CoinDetail      //Componente
        }

    ]
})