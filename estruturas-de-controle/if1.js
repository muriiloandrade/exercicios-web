function soBoaNoticia (nota) {
    if(nota>=7) console.log('Aprovado com:', nota)
}

soBoaNoticia(8.1)
soBoaNoticia(7)
soBoaNoticia(5)

function seForVerdadeEuFalo (valor) {
    if(valor) console.log('É verdade... ' + valor);
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('Teste')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([2,3,4])
seForVerdadeEuFalo({})