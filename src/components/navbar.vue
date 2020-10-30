<template>
    <div class="navbar">
        <router-link class="link" to="/"><img src="../assets/logo.svg"><h1>TJALDA</h1></router-link>
        
        <div class="links">
            <router-link class="link" to="/">Forsíða</router-link>
            <router-link class="link" to="upplysingar">Upplýsingar</router-link>
            <router-link class="link" to="skra-inn">Skrá inn</router-link>
        </div>
    </div>
</template>

<style scoped>
    h1{
        margin-top: 10px;
        margin-bottom: 0;
        padding: 0;
    }
    .navbar{
        list-style-type: none;
        height: 60px;
        margin: 0;
        padding: 15px;
        overflow: hidden;
        border: 1px solid #e7e7e7;
        background-color: #f3f3f3;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    }
    img, h1{
        height: 50px;
        float: left;
        padding-right: 10px;
    }
    .links{
        margin: auto;
        float: right;
        padding: 20px;
        font-weight: bold;
    }
    .link{
        text-decoration: none;
        font-weight: bold;
        padding-left: 15px;
        color: #4d4d4d;
    }
</style>