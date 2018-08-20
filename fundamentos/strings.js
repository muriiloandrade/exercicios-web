const escola = "Nigga?"

console.log(escola.charAt(4))
console.log(escola.charAt(6)) //Retorna blank se IndexOutOfBounds
console.log(escola.indexOf('!')) //Retorna -1 se o caracter não existir
console.log(escola.substring(1)) //Retorna uma string começando pelo indice referenciado
console.log(escola.substring(1,4)) //A ultima posição não é incluída
console.log('Escola '.concat('Murilinho ').concat(escola))
console.log(escola.replace('?', '!'))

//Transformando uma string em array
console.log('Ana, João, Pedro, Antônio, Augusto, Neymar Jr'.split(','))