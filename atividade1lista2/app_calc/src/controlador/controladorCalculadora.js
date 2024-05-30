const calculadora = require('../calculadora/calculadora');
const path = require('path');

exports.calcular = (req, res) => {
    const { numero1, operacao, numero2 } = req.body;
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
        res.sendFile(path.join(__dirname, '../visoes/index.html'));
        res.send('<script>document.getElementById("erro").innerText = "Por favor, insira valores numéricos válidos.";</script>');
        return;
    }

    const resultado = calculadora.calcularOperacao(num1, operacao, num2);
    res.send(`
        <html>
            <body>
                <h1>Resultado: ${resultado}</h1>
                <a href="/">Nova Operação</a>
            </body>
        </html>
    `);
};
