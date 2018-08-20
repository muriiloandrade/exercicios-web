//ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
//console.log(Object.keys(obj)) Versão antiga, mostra as chaves, não os valores
console.log(Object.entries(obj)) //Retorna uma matriz, um array de arrays

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    //nome: nome anterior
    nome: 'Jorge',
    //ola: function(){}
    ola(){
        return 'Oi gente, eu sou ' + this.nome + '!'
    }
}

console.log(pessoa.ola())

//Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())