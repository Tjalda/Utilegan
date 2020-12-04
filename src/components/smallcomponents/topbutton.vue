<template>
    <div>
        <a v-on:click="up"><i class="fas fa-angle-double-up" style="color:white;"></i></a>
    </div>
</template>

<script>
export default{
    data() {
        return {
           counter: 0
        }
    },
    methods: {
        up: function (event) {
            var rootElement = document.documentElement;
            rootElement.scrollTo({top: 0, behavior: "smooth"});
        }
    }
}
</script>

<style scoped>
    div{
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: black;
        font-size: 35px;
        padding: 10px;
        border-radius: 60px;
        line-height: 0;
        text-decoration: none;
        display: none;
        width: 35px;
        cursor: pointer;
    }

    @media screen and (min-width: 37.5em){ div{ display: block; } }
</style>