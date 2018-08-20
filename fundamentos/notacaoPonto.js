console.log(Math.ceil(6.1))

const objeto1= {}
objeto1.nome = 'Bola'
//objeto1['nome'] = 'Bola2' Isso sobrescreveria o valor, por ser a mesma coisa

console.log(objeto1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const objeto2 = new Obj('Cadeira')
const objeto3 = new Obj('Mesa')
console.log(objeto2.nome)
console.log(objeto3.nome)
objeto2.exec()
