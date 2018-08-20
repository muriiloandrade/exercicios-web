//Estratégia 1 para gerar valor padrão
function soma1 (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}
//Essa estratégia não serve pois quando inserido o valor 0, o mesmo é tratado como false e a
//variável recebe o valor 1
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//Estratégia 2, 3 e 4 para gerar valor padrão
function soma2 (a, b, c) {
    a = a !==  undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //mais segura
    return a+b+c
}
//Ainda assim pode ocorrer bugs, além da sintaxe ficar um pouco poluída
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//Valor padrão do ES2015
function soma3 (a=1, b=1, c=1) {
    return a+b+c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))