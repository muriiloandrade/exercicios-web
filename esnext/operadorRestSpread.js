//Operador ... rest(juntar)/spread(espalhar)
// Usar rest com parâmetro de função

//Usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12345.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)