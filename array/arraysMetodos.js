const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento do Array
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() //Remove o primeiro elemento do Array
console.log(pilotos);

pilotos.unshift('Hamilton') //Adiciona um elemento no começo do Array
console.log(pilotos);

//Splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

//Remover
pilotos.splice(3, 1)
console.log(pilotos);

//Slice (novo array gerado)
const algunsPilotos1 = pilotos.slice(2) //Gera um novo Array a partir do indice passado
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) //Intervalo [1, 4)
console.log(algunsPilotos2);