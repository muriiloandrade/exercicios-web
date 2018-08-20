const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 5.00, fragil : false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco>2000
const fragil = produto => produto.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)  