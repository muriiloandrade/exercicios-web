let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj= {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/*O this associado à uma função arrow é o contexto de onde ela foi escrita, 
e é imutável*/