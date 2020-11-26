<template>
    <div class="content">
        <h1>{{title}}</h1>
        <hr>

        <div class="signin">
            <component v-bind:is="currentTabComponent" @usersubmit="addorlogin"></component>
            <p v-on:click="if(value) { value = false; changeTitle(true); } else {value=true; changeTitle(false);}">{{change}}</p>
        </div>

        <hr>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt lacinia ex, et tristique arcu ultrices in. 
            Morbi sagittis velit nulla, sit amet cursus erat laoreet ut. Fusce bibendum orci eu elit viverra, non sollicitudin ipsum accumsan. 
            Integer commodo justo eget nunc facilisis tristique. Donec cursus urna in mauris sodales, vel placerat magna eleifend.<br><br> 
            Cras turpis erat, tempor et est id, ullamcorper malesuada velit. Pellentesque et velit sem.Nulla consectetur ullamcorper metus, in lobortis urna aliquam vitae. 
            Vivamus id ligula leo. Vestibulum ac malesuada nunc. Nam erat mi, condimentum ut sagittis quis, rhoncus dignissim sapien. Donec eros metus, feugiat vitae pulvinar et, rhoncus sed mauris. 
            Nulla id ultricies justo. Aliquam convallis egestas est, a semper magna placerat in. Morbi sed luctus justo. Praesent a odio at erat faucibus efficitur. Cras at enim urna. <br><br>
            Aliquam consequat id tellus eget varius. Ut ultricies, tortor id tincidunt ornare, enim ligula accumsan nulla, facilisis dapibus nibh dui et ante. 
            Quisque sed quam eu leo pretium pharetra vel non magna. Nunc eget efficitur elit, vitae congue velit. Praesent finibus enim nunc, vehicula eleifend velit dictum at. Nulla et interdum odio.
        </p>
    </div>
</template>

<script>
import login   from "../components/smallcomponents/login.vue"
import createu from "../components/smallcomponents/createuser.vue"


export default { 
    data() {
        return {
            value: true,
            change: "Nýr notandi? Nýskráning",
            title:  "Skrá inn",
            userdata: []
        }
    },
    computed: {
        currentTabComponent() {
            if(this.value)
                return login;
            else
                return createu;
        }
    },
    methods: {
        changeTitle(diff) {
            if(diff){
                this.title  = "Nýskránning";
                this.change = "Ertu nú þegar notandi? Skrá inn";
            }
            else{
                this.title  = "Skrá inn";
                this.change = "Nýr notandi? Nýskráning";
            }
        },
        addorlogin(values) {
            this.userdata.push(values);
            console.log(values);
            this.$router.push('notandi');
        }
    }
  } 
</script>

<style scoped>
    .content{
        max-width: 75em;
        margin: 0 auto;
        background-color: white;
        text-align: left;
        padding: 3em;
        min-height: 40em;
        line-height: 1.5;
    }
    h1{
        margin-top: -10px;
    }
    .signin{
        max-width: 30em;
        margin: 0 auto;
        padding: 3em 0 3em 0;
    }
    .signin p{
        text-align: center;
        padding: 0;
        text-decoration:underline;
        cursor: pointer;
    }

    @media screen and (min-width: 37.5em){
        .signin{
            padding: 3em;
        }
    }
</style>