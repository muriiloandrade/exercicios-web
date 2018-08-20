class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}!`) 
        //This para acessar o nome do objeto que for instanciado
    }
}

const p1 = new Pessoa('Murilo')
p1.falar()

function criarPessoa (nome) {
    this.nome = nome //Comentando essa linha o nome será privado, assim, inacessível fora da função
    
    this.falar = function() {
        console.log(`Meu nome é ${nome}!`)
    }
}

const p2 = new criarPessoa('Jonas')
p2.falar()
console.log(p2.nome)