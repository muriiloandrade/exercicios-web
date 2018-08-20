//Opera nos valores, ao contrário do for in que opera nos indices
for(let letra of 'Cod3r'){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for(let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let [c, v] of assuntosMap){
    console.log(c, v)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}