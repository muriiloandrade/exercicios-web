function tratarErroELancar (erro) {
    //throw new Error('Erro recebido')
    //throw 10
    //throw true
    //throw 'Erro recebido'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally {
        console.log('Final da execução do try')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)