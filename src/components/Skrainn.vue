<template>
    <div class="content">
        <h1>Skrá inn</h1>
        <hr>
        <div class="signin">
            <label for="uname"><b>Notendanafn</b></label>
            <input type="text" placeholder="Sláðu inn notendanafn" name="uname" required>
            <br><br>
            <label for="psw"><b>Lykilorð</b></label>
            <input type="password" placeholder="Sláðu inn lykilorð" name="psw" required>
                
            <button type="submit">Skrá inn</button>

            <p>Nýr notandi? <a href="">Nýskráning</a></p>
        </div>

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
export default {
    
}
</script>

<style scoped>
    .content{
        max-width: 75em;
        margin: 0 auto;
        background-color: white;
        text-align: left;
        padding: 3em;
    }
    h1{
        margin: 0;
    }
    .signin p{ 
        text-align: center;
        padding: 0;
    }
    p{
        padding-top: 1em;
    }
    .signin{
        max-width: 30em;
        margin: 0 auto;
        padding: 3em;
    }
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    button:hover {
        opacity: 0.8;
    }
</style>