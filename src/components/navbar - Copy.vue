<template>
    <div class="navbar">
        <router-link class="tjalda" to="/"><img src="../assets/logo.svg"><h1>TJALDA</h1></router-link>
        <div class="mobilenav"><i class="fas fa-align-justify"></i></div>
        <div class="links">
            <router-link class="link" to="/"><i class="fas fa-home"></i> Forsíða</router-link> | 
            <router-link class="link" to="upplysingar"><i class="fas fa-info-circle"></i> Upplýsingar</router-link> | 
            <!--<router-link class="link" to="skra-inn"><i class="fas fa-sign-in-alt"></i> {{signin}}</router-link>-->
            <router-link class="link" to="skra-inn"><i class="fas fa-sign-in-alt"></i> Skrá inn</router-link>
        </div>
    </div>
</template>

<script>
    /*export default{
        props: ['signin']
    }*/
</script>

<style scoped>
    h1{
        margin-top: 10px;
        margin-bottom: 0;
        padding: 0;
    }
    .navbar{
        list-style-type: none;
        height: 55px;
        margin: 0;
        padding: 15px;
        overflow: hidden;
        background-color: #f3f3f3;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
        position: sticky;
    }
    .mobilenav{
        display: block;
        font-size: 35px;
        float: right;
        padding: 10px;
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
    .tjalda{ 
        text-decoration: none;
        font-weight: bold;
        padding-left: 15px;
        color: black;}
    
    .link{
        text-decoration: none;
        font-weight: bold;
        padding: 0 10px 0 10px;
        color:#9c9c9c;
    }

    .links .link:hover,
    .links .link.router-link-active,
    .links .link.router-link-exact-active {
        color: black;
    }
    @media screen and (min-width: 37.5em){ .mobilenav {
        display: none;
        } 
    }

</style>