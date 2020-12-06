<template>
    <div>
        <form @submit.prevent="checkForm">

            <!--<p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="error in errors" v-bind:key="error">{{ errors[0] }}</li>
                </ul>
            </p>-->

            <label for="uname"><b>Notendanafn</b></label>
            <input type="text" placeholder="Sláðu inn notendanafn" name="uname" v-model="name">
            <span>{{errors[0]}}</span>
            <!--<input v-model="name" name="uname">-->
            <br><br>

            <label for="email"><b>Netfang</b></label>
            <input type="text" placeholder="Sláðu inn netfang" name="email"  v-model="email">
            <span>{{errors[1]}}</span>
            <br><br>

            <label for="psw"><b>Lykilorð</b></label>
            <input type="password" placeholder="Sláðu inn lykilorð" name="psw" v-model="password1">
            <input type="password" placeholder="Sláðu inn lykilorð aftur" name="psw" v-model="password2">
            <span>{{errors[2]}}</span>
      
            <button type="submit">Stofna aðgang</button>
        </form> 
    </div>
</template>

<script>
export default { 
    data() {
        return {
            errors:    ["","",""],
            name:      "",
            email:     "",
            password1: "",
            password2: ""
        }
    },
    methods:{
        onSubmit(){
            let userdata = {
                type:      "createuser",
                name:      this.name,
                email:     this.email,
                password1: this.password1,
                password2: this.password2
            }
            this.$emit("usersubmit", userdata)

            this.name      = ""
            this.email     = ""
            this.password1 = ""
            this.password2 = ""
        },
  
        checkForm:function(e) {
            this.errors = [];
            if(!this.name)                               this.errors[0] = "Sláðu inn nafn.";
            if(!this.email)                              this.errors[1] = "Sláðu inn netfang.";
            if(this.password1 !== this.password2)        this.errors[2] = "Lykilorð passa ekki.";
            else if (!this.password1 || !this.password2) this.errors[2] = "Sláðu inn lykilorð.";

            if(this.errors === undefined || this.errors.length == 0) this.onSubmit();
            //console.log(this.errors);
        }
    }
}
</script>

<style scoped>
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        border-radius: 100px;

    }
    button {
        background-color: #7c66ad;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        font-weight: bold;
    }
    button:hover {
        opacity: 0.8;
    }
    span{
        color:red;
    }
</style>