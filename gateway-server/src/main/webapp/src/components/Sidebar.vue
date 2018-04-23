<template>
    <div class="sidenav">
        <a href="about">About</a>
        <a href="azure-spring-cosmosdb">Azure CosmosDB</a>
        <a href="contact">Contact</a>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
            }
        },
        methods: {
        }
    };
</script>
<style>
    .sidenav {
        height: 100%;
        width: 240px;
        position: fixed;
        z-index: 1;
        left: 0;
        background-color: #f9f9f9;
        overflow-x: hidden;
        padding-top: 20px;
        text-align: center;
    }

    .sidenav a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 1rem;
        color: #343a40;
        display: block;
    }

    .sidenav a:hover {
        color: #727477;
    }

    .main {
        margin-left: 160px;
        font-size: 28px;
        padding: 0px 10px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }
</style>