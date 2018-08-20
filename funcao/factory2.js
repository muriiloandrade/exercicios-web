//Factory elaborada por mim
function criarProduto (nome, preco) {
    const descontoDoProduto = 0.15
    return {
        nome,
        preco,
        precoComDesconto: ((1-descontoDoProduto)*preco)
    }
}

console.log(criarProduto('Celular', 600.00))