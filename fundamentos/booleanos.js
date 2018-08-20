let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Dupla negação para o valor diferente de true or false não se alterar

isAtivo = 0
console.log(!!isAtivo) //Dupla negação para o valor diferente de true or false não se alterar

console.log('\nOs verdadeiros...')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('\nOs falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0)) 
console.log(!!(isAtivo = false)) 