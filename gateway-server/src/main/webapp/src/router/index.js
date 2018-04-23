import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'

Vue.use(Router)

const routes = {
    routes: [
        { path: '/', component: About},
        { path: '/about', component: About}
    ]
}

export default new Router(routes);