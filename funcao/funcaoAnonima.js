const soma = function(x,y){
    return x+y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x,y){return x-y})
imprimirResultado(3, 4, (x, y) => x*y) //Arrow Functions anônimas não precisa o parâmetro de nome

const Pessoa = {
    falar: function() {
        console.log('Fala')
    }, //Dois jeitos de implementar funções dentro de um objeto
    andar() {
        console.log('Anda')
    }
}

Pessoa.falar()
Pessoa.andar()