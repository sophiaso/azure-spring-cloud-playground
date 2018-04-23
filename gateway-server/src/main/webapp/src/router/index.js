import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import AzureCosmosDB from '../components/AzureCosmosDB'
import Contact from '../components/Contact'

Vue.use(Router)

const routes = {
    routes: [
        { path: '/', component: About},
        { path: '/about', component: About},
        { path: '/azure-spring-cosmosdb', component: AzureCosmosDB},
        { path: '/contact', component: Contact}
    ]
}

export default new Router(routes);