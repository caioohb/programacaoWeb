module.exports = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero";
        }
        return a / b;
    }
};
