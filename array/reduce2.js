const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?     resultado = resultado da callback anterior
const todosBolsistas = (resultado, bolsista) => resultado && bolsista   
console.log('Todos os alunos são bolsistas?', alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log('Algum dos alunos é bolsista?', alunos.map(a => a.bolsista).reduce(algumBolsista))