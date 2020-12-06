<template>
    <div class="content">
        <div class="info">
            <img src="../assets/images/user.png">
            <div>
                <h3>Username</h3>
                <p>Email@email.com</p>
            </div>
            <button>Skrá út</button>
        </div>

        <hr>

        <h1 style="padding-top: 1em;">Bókanir þínar</h1>
        <hr>
        <p>Hér eru allar núverandi bókaninar þínar</p>
        <table>
            <thead>
                <tr>
                    <th>Dagsetning</th>
                    <th>Staðsetning</th>
                    <th>Svæði</th>
                    <th>Tími</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td data-label="Dagsetning">11/18/2020</td>
                    <td data-label="Staðsetning">Laugarland</td>
                    <td data-label="Svæði">A12</td>
                    <td data-label="Tími">7 dagar</td>
                    <td><button>Afpanta</button></td>
                </tr>
                <tr>
                    <td data-label="Dagsetning">01/12/2021</td>
                    <td data-label="Staðsetning">Flúðir</td>
                    <td data-label="Svæði">C02</td>
                    <td data-label="Tími">3 dagar</td>
                    <td><button>Afpanta</button></td>
                </tr>
            </tbody>
        </table>

        <h1 style="padding-top: 1em;">Fyrrverandi bókanir</h1>
        <hr>
        <p>Hér eru allar fyrrverandi bókaninar þínar</p>
        <table>
            <thead>
                <tr>
                    <th>Dagsetning</th>
                    <th>Staðsetning</th>
                    <th>Svæði</th>
                    <th>Tími</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td data-label="Dagsetning">05/21/2020</td>
                    <td data-label="Staðsetning">Hraunborg</td>
                    <td data-label="Svæði">B07</td>
                    <td data-label="Tími">2 dagar</td>
                </tr>
                <tr>
                    <td data-label="Dagsetning">12/12/2019</td>
                    <td data-label="Staðsetning">Árnes</td>
                    <td data-label="Svæði">D15</td>
                    <td data-label="Tími">5 dagar</td>
                </tr>
                <tr>
                    <td data-label="Dagsetning">05/21/2019</td>
                    <td data-label="Staðsetning">Skaftafell</td>
                    <td data-label="Svæði">C10</td>
                    <td data-label="Tími">10 dagar</td>
                </tr>
                <tr>
                    <td data-label="Dagsetning">06/01/2018</td>
                    <td data-label="Staðsetning">Hraunborg</td>
                    <td data-label="Svæði">B08</td>
                    <td data-label="Tími">7 dagar</td>
                </tr>
                <tr>
                    <td data-label="Dagsetning">03/12/2018</td>
                    <td data-label="Staðsetning">Laugarland</td>
                    <td data-label="Svæði">F02</td>
                    <td data-label="Tími">6 dagar</td>
                </tr>
                <tr>
                    <td data-label="Dagsetning">07/17/2017</td>
                    <td data-label="Staðsetning">Flúðir</td>
                    <td data-label="Svæði">G09</td>
                    <td data-label="Tími">2 dagar</td>
                </tr>
            </tbody>
        </table>
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
        padding: 3em 1em 1em 1em;
        min-height: 40em;
        line-height: 1.5;
    }
    h1{
        margin-top: -10px;
    }
    p{ 
        padding-top: 1em;
    }
    table {
        border: 1px solid #ccc;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        width: 100%;
        table-layout: fixed;
    }
    table caption {
        font-size: 1.5em;
        margin: .5em 0 .75em;
    }

    table tr {
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        padding: .35em;
    }

    table th,
    table td {
        padding: .625em;
        text-align: center;
    }

    table th {
        font-size: .85em;
        letter-spacing: .1em;
        text-transform: uppercase;
    }
    tr:nth-child(even) {
        background-color: #ececec;
    }
    button {
        background-color: #7c66ad;
        border: none;
        color: white;
        padding: 8px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;    
    }
    .info{
        display: grid;
        grid-gap: 15px;
        grid-template-columns: auto 4fr;
        padding-bottom: 1em;
    }
    .info p{
        padding: 0;
    }
    .info button{
        background-color: rgb(236, 67, 37);
        height: 34px;
        transform: translateY(0%);
    }
    img{
        border-radius: 5em;
        width: 100px;
    }

    @media screen and (max-width: 600px) {
        table {
            border: 0;
        }

        table caption {
            font-size: 1.3em;
        }
        
        table thead {
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }
        
        table tr {
            border-bottom: 3px solid #ddd;
            display: block;
            margin-bottom: .625em;
        }
        
        table td {
            border-bottom: 1px solid #ddd;
            display: block;
            font-size: .8em;
            text-align: right;
        }
        
        table td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        table td:last-child {
            border-bottom: 0;
        }
    }
    @media screen and (min-width: 37.5em){  
        .content{
            padding: 3em;
        }
        .info{
            grid-template-columns: auto 4fr auto;
        }
        .info button{
            background-color: rgb(236, 67, 37);
            height: 34px;
            transform: translateY(100%);
        }
    }
    
    
</style>