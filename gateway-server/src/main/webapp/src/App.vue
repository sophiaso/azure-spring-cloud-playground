<template>
    <div>
        <Nav></Nav>
        <div>
            <Sidebar></Sidebar>
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