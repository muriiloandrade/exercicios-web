let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a //return obrigatório por causa da presença dos blocos
}

dobro = a => 2*a //return implícito se não colocar o bloco
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá!'
}

ola = () => 'Olá'
console.log(ola());