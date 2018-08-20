const moduloA = require('./moduloA') //Pega o que foi exportado do módulo A
const moduloB = require('./moduloB') //Pega o que foi exportado do módulo B

console.log('------------- Módulo A -------------')
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)


console.log('\n------------- Módulo B -------------')
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)