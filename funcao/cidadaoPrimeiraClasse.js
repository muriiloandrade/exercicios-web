//Função em JS é First-Class Object (Citizens)
//High-order function

//Criar de forma literal | Uma função sem retorno definido retorna undefined
function fun1(){

}

//Armazenar em uma variável
const fun2 = function(){
    
}

//Armazenar em um array
const array = [function (a, b) {return a+b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){
    return 'Opa!'
}
console.log(obj.falar())
console.log(obj)

//Como passar uma função como parâmetro para outra função
function run(fun){
    fun()
    console.log('passado para dentro da função')
}

run(function(){
    console.log('Texto de parâmetro')
})

//Uma função pode retornar/conter uma outra função dentro dela
function soma (a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)