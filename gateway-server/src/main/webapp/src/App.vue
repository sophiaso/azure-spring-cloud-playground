<template>
    <div id="main">
        <Nav></Nav>
        <b-container fluid>
            <b-row>
                <b-col sm="3">
                    <Sidebar></Sidebar>
                </b-col>
                <b-col sm="9">
                    <router-view></router-view>
                </b-col>
            </b-row>
        </b-container>
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
</style>