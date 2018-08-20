console.log(soma(3, 4))
//console.log(sub(3, 4)) sub não tá definida aqui ainda

//Function declaration
function soma (x, y) {
    return x+y
}

//Function expression
const sub = function(x, y){
    return x-y
}
console.log(sub(3, 2))

//Named function expression
const mult = function mult(x, y){
    return x*y
}

