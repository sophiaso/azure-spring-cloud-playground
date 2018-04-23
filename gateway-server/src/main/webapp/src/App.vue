<template>
    <div id="main">
        <Nav></Nav>
        <div id="content">
            <Sidebar></Sidebar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Layout } from 'bootstrap-vue/es/components'
    import Nav from './components/Nav'
    import Sidebar from './components/Sidebar'

    Vue.use(Layout);

    export default {
        data: function() {
            return {
            }
        },
        components: {
            Nav,
            Sidebar
        }
    };
</script>
<style>
    html, body, #main {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #content {
        display: flex;
        flex-flow: row wrap;
        height: inherit;
    }
</style>