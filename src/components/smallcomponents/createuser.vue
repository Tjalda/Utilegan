<template>
    <div>
        <label for="uname"><b>Notendanafn</b></label>
        <input type="text" placeholder="Sláðu inn notendanafn" name="uname" required>
        <br><br>

        <label for="email"><b>Tölvupóstur</b></label>
        <input type="text" placeholder="Sláðu inn tölvupóst" name="email" required>
        <br><br>

        <label for="psw"><b>Lykilorð</b></label>
        <input type="password" placeholder="Sláðu inn lykilorð" name="psw" required>
        <input type="password" placeholder="Sláðu inn lykilorð aftur" name="psw" required>

                
        <button type="submit">Skrá inn</button>
    </div>
</template>

<style scoped>
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
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
</style>