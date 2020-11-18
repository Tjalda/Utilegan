<template>
    <div class="content">
        <h1>Bókanir þínar</h1>
        <hr>
        <p>Hér eru allar núverandi bókaninar þínar</p>
        <table>
            <tr>
                <th>Dagsetning</th>
                <th>Staðsetning</th>
                <th>Svæði</th>
                <th>Tími</th>
                <th></th>
            </tr>
            <tr>
                <td>11/18/2020</td>
                <td>Laugarland</td>
                <td>A12</td>
                <td>7 dagar</td>
                <td><button>Afpanta</button></td>
            </tr>
            <tr>
                <td>01/12/2021</td>
                <td>Flúðir</td>
                <td>C02</td>
                <td>3 dagar</td>
                <td><button>Afpanta</button></td>
            </tr>
        </table>

        <h1 style="padding-top: 1em;">Fyrrverandi bókanir</h1>
        <hr>
        <p>Hér eru allar fyrrverandi bókaninar þínar</p>
        <table>
            <tr>
                <th>Dagsetning</th>
                <th>Staðsetning</th>
                <th>Svæði</th>
                <th>Tími</th>
            </tr>
            <tr>
                <td>05/21/2020</td>
                <td>Hraunborg</td>
                <td>B07</td>
                <td>2 dagar</td>
            </tr>
            <tr>
                <td>12/12/2019</td>
                <td>Árnes</td>
                <td>D15</td>
                <td>5 dagar</td>
            </tr>
            <tr>
                <td>05/21/2019</td>
                <td>Skaftafell</td>
                <td>C10</td>
                <td>10 dagar</td>
            </tr>
            <tr>
                <td>06/01/2018</td>
                <td>Hraunborg</td>
                <td>B08</td>
                <td>7 dagar</td>
            </tr>
            <tr>
                <td>03/12/2018</td>
                <td>Laugarland</td>
                <td>F02</td>
                <td>6 dagar</td>
            </tr>
            <tr>
                <td>07/17/2017</td>
                <td>Flúðir</td>
                <td>G09</td>
                <td>2 dagar</td>
            </tr>
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
        padding: 3em;
    }
    h1{
        margin: 0;
    }
    p{ 
        padding-top: 1em;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #e2e2e2;
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
    
    
</style>