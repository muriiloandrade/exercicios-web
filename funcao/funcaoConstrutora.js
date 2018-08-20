function Carro(velocidadeMaxima = 140, delta = 5){
    //Atributo privado
    velocidadeAtual = 0

    //Método público
    this.acelerar = function(){
        if(velocidadeAtual + delta<=velocidadeMaxima){
            velocidadeAtual += delta
            return 'Acelerou, já está em:'
        } else{
            velocidadeAtual = velocidadeMaxima
            return 'Já está cortando o giro do motor, idiota!'
        }
    }

    //Método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(60, 20)
console.log(ferrari.acelerar(), `${ferrari.getVelocidadeAtual() + 'km/h'}`)
console.log(ferrari.acelerar(), `${ferrari.getVelocidadeAtual() + 'km/h'}`)
console.log(ferrari.acelerar(), `${ferrari.getVelocidadeAtual() + 'km/h'}`)
console.log(ferrari.acelerar())
//ferrari.acelerar()
//ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())