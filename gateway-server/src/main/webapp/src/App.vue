<template>
    <div>
        <Nav></Nav>
        <b-container fluid>
            <b-row class="text-center">
                <b-col>
                    <Sidebar></Sidebar>
                </b-col>
                <b-col cols="8"></b-col>
                <b-col></b-col>
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