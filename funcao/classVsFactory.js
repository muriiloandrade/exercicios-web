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

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}!`)
    }
}

const p2 = criarPessoa('João')
p2.falar()