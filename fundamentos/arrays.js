const valores = [7.7, 8.9, 6.3, 9.2]

console.log('Primeiro e último valores: ' + valores[0] + ' e ' + valores[3])

valores[4] = 10
console.log('Valores do vetor:', valores)
console.log('Quantidade de valores no vetor:', valores.length)

console.log('\nInserindo 3 valores\n')
valores.push({id: 3}, false, null, 'teste')
console.log('Valores após a inserção:',  valores)

console.log('Retirando o último valor do vetor:', valores.pop())
delete valores[0]
console.log('Após a retirada do primeiro elemento do vetor:', valores)

console.log('Tipo do vetor: ' + typeof valores)