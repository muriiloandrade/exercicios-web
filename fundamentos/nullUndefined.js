let valor //Não inicializada - Undefined
console.log(valor)

valor = null //Ausência de valor
console.log(valor)
//console.log(valor.toString()) Dá erro pq não pode ler algo que não tem conteúdo

const produto = {}
//Tentar acessar algum atributo que não foi declarado é ok, ele vai ser undefined
console.log(produto.preco)
//Tentar acessar um atributo de algo undefined dá erro
//console.log(produto.preco.a)

console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir explicitamente o undefined, usar null, no lugar
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)