import Vue from 'vue';
import VueRouter from 'vue-router';

// containers
import App from './containers/App';
import Home from './containers/Home';
import Button from './containers/Button';

Vue.config.productionTip = false
Vue.use( VueRouter );

const router = new VueRouter( {
    mode: 'history',
    base: __dirname,
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'button',
            path: '/button',
            component: Button
        },
    ]
} );

const BaseVue = Vue.extend( { router } );

new BaseVue( {
    el: '#app',
    render: h => h( App )
} );
