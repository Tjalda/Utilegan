<template>
    <div class="navbar">
        <router-link class="tjalda" to="/"><img src="../assets/logo.svg"><h1>TJALDA</h1></router-link>
    </div>
    
    <div>
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle"><i class="fas fa-align-justify mobilenav"></i></label>

        <nav class="topnav">
            <ul class="topmenu">
                <li><router-link class="link" to="/"><i class="fas fa-home"></i> Forsíða</router-link></li>
                <li><router-link class="link" to="upplysingar"><i class="fas fa-info-circle"></i> Upplýsingar</router-link></li>
                <!--<router-link class="link" to="skra-inn"><i class="fas fa-sign-in-alt"></i> {{signin}}</router-link>-->
                <li><router-link class="link" to="skra-inn"><i class="fas fa-sign-in-alt"></i> Skrá inn</router-link></li>
            </ul>
        </nav>
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
        z-index: 2;
    }
    .tjalda{ 
        text-decoration: none;
        padding-left: 15px;
        color: black;
    }
    img, h1{
        height: 50px;
        float: left;
        padding-right: 10px;
    }

    /*--------------------
    Navbar buttons
    --------------------*/
    nav{
        background-color: #464646;
        grid-area: nav;
    }
    li{
        padding: 1em;
    }
    .topmenu{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .topnav{
        z-index: 1;
        position: absolute;
        top: -200px;
        width: 100%;
        transition: top .4s;
    }
    #menu-toggle:checked ~ .topnav{
        top: 85px;
    }
    #menu-toggle{
        display: none;
    }
    label{
        z-index: 3;
        position: absolute;
        top: 15px;
        right: 15px;
        height: 51px;
        text-align: center;
        cursor: pointer;
        font-size: 35px;
        padding: 10px;
    }
    .link{
        text-decoration: none;
        font-weight: bold;
        color:#9c9c9c;
    }
    .links{
        margin: auto;
        float: right;
        padding: 20px;
        font-weight: bold;
    }
    .link.router-link-active{
        color: white;
    }

    @media screen and (min-width: 37.5em){
        .topmenu{
            display: flex;
            justify-content: center;
        }
        nav li{
            width: 250px;
        }
        label {
            display: none;
        }
        .topnav{
            position: static;
        }
    }

</style>