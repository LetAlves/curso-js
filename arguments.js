// somar os números sem colocar eles nos parâmetros

function soma(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
console.log(soma([5, 3, 9]))

// com arguments

function somar(){
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }   
    return total
}
console.log(somar(1, 3))

// outro teste 
const multiplicar = function b(){
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(multiplicar(5,9,20))

// pra saber o nome da function: propriedade name
console.log(multiplicar.name)
//não é muito utilizada
