<template>
    <div>
        <form @submit.prevent="checkForm">
            <label for="uname"><b>Notendanafn</b></label>
            <input type="text" placeholder="Sláðu inn notendanafn" name="uname" v-model="name">
            <span>{{errors[0]}}</span>
            <br><br>

            <label for="psw"><b>Lykilorð</b></label>
            <input type="password" placeholder="Sláðu inn lykilorð" name="psw" v-model="password">
            <span>{{errors[1]}}</span>
                    
            <button type="submit">Skrá inn</button>
        </form>
    </div>
</template>

<script>
export default { 
    data() {
        return {
            errors:   ["",""],
            name:     "",
            password: ""
        }
    },
    methods:{
        onSubmit(){
            let userdata = {
                type: "loginuser",
                name: this.name,
                password: this.password
            }
            this.$emit("usersubmit", userdata)

            this.name     = ""
            this.password = ""
        },
  
        checkForm:function(e) {
            this.errors = [];
            if(!this.name)     this.errors[0] = "Sláðu inn nafn.";
            if(!this.password) this.errors[1] = "Sláðu inn lykilorð.";

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