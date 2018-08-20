console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 //visível fora do módulo
exports.b = 2 //visível fora do módulo
module.exports.c = 3 //visível fora do módulo

exports = null //Não muda o valor que será exportado
console.log(module.exports)

//Mudando a referência de memória do exports com outro objeto
exports = {
    nome: 'Teste'
}
//Não muda de fato o endereço e o que é exportado é o que foi setado anteriormente
console.log(module.exports)

//Agora sim muda a porra toda
module.exports = {
    publico: true
}

//Para mudar teria que ser usado o module.exports = null, por exemplo.