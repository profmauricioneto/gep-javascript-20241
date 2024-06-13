const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/media', function(req, res) {
    const {nota1, nota2, nota3, nota4} = req.body;
    const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resultado da Média</title>
    </head>
    <body>
        <div id="container">
            <h1>Resultado da Média</h1>
            <p>A média dos números ${nota1}, ${nota2}, ${nota3}, ${nota4} é ${media.toFixed(2)}</p>
            <a href="/">Calcular Novamente</a>
        </div>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})