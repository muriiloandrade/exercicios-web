//Não aceita repetição e não possui indice

const times = new Set()
times.add('São Paulo')
times.add('Flamengo')
times.add('Bahia').add('Vasco').add('Palmeiras')
times.add('São Paulo')
console.log(times)
console.log(times.size)
console.log(times.has('são paulo'))
console.log(times.has('São Paulo'))
times.delete('Vasco')
console.log(times)
console.log(times.has('Vasco'))

//Passando um array para um Set
const nomes = ['Lucas', 'Murilo', 'Ginaldo', 'Felipe', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
