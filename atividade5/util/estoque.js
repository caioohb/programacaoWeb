const estoque = [];

module.exports = {
    adicionar: function(id, nome, qtd) {
        estoque.push({ id, nome, qtd });
        return `Produto adicionado: ${id}, ${nome}, ${qtd}`;
    },
    listar: function() {
        return estoque;
    },
    remover: function(id) {
        const index = estoque.findIndex(produto => produto.id === id);
        if (index !== -1) {
            estoque.splice(index, 1);
            return `Produto removido: ${id}`;
        }
        return `Produto com ID ${id} não encontrado`;
    },
    editar: function(id, qtd) {
        const produto = estoque.find(produto => produto.id === id);
        if (produto) {
            produto.qtd = qtd;
            return `Quantidade do produto ${id} editada para ${qtd}`;
        }
        return `Produto com ID ${id} não encontrado`;
    }
};
