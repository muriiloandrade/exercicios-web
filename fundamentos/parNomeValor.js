//Par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Faaaala!'
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Largo da Ventosa',
        numero: 22
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)