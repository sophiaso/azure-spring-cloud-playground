<template>
    <div id="nav">
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">Azure Spring Cloud Playground</b-navbar-brand>
        </b-navbar>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {Navbar} from 'bootstrap-vue/es/components';

    Vue.use(Navbar);


    export default {
        data: function() {
            return {
            }
        },
        methods: {
        }
    };
</script>