// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'} //O endereço não poderá ser reatribuído, atributos são mutáveis
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} isso reatribuiria um endereço para o obj pessoa, por isso dá erro

Object.freeze(pessoa) //Nenhuma alteração poderá ser feita em pessoa a partir daqui

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//Um objeto constante desde a criação seria
const pessoaConstante = Object.freeze({nome: 'Carlos'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)