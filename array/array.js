let aprovados = new Array('Bia', 'Ana', 'Carlos')
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()
console.log('\n\n', aprovados)

delete aprovados[1] //seta undefined na posição indicada
console.log('\n', aprovados[1])

aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1, 1)
console.log(aprovados)