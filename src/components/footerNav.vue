<template>
    <footer>
        <p>Tjalda &#169; 2020</p>
        <div class="links">
            <router-link class="link" to="/">Forsíða</router-link> | 
            <router-link class="link" to="upplysingar">Upplýsingar</router-link> | 
            <router-link class="link" to="skra-inn">Skrá inn</router-link>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        font-weight: bold;
        list-style-type: none;
        height: 130px;
        margin: 0;
        padding: 35px 0 15px 0;
        overflow: hidden;
        background-color: #212121;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    }
    .links{
        padding: 20px;
        margin: 0 auto;
    }
    p, .link{
        text-decoration: none;
        padding: 0 10px 0 10px;
        color:rgb(255, 255, 255);
    }
</style>