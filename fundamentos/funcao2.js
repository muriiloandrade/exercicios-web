//Armazenando uma função dentro de uma variável

const imprimirSoma = function(a, b){
    console.log(a+b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a+b
}
console.log(soma(2,6))

//Return implícito
//Estrutura: Nome da variável, parâmetros entre parenteses (se forem em mais de um), retorno
const subtracao = (a, b) => a - b
console.log(subtracao(2, 1))

const imprimirQuadrado = a => console.log(Math.pow(a, 2))
imprimirQuadrado(6)