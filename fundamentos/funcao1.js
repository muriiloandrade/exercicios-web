//Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) //Executa normalmente como (2+undefined) = Not a number
imprimirSoma(2, 10, 3, 4, 6) //Executa normalmente ignorando os parâmetros excedentes
imprimirSoma() //Executa normalmente como (undefined + undefined) = NaN

//Função com retorno
function Soma(a, b=1){ //Se nenhum valor for passado para b, ele assume o valor 1
    return a+b
}

console.log('Funções com retorno')
console.log(Soma(2, 4))
console.log(Soma(2))
console.log(Soma()) //Se o a não for tratado (undefined + 1) = NaN