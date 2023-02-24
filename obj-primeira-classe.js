function fn(cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb() // se nfor uma function dá undefined e undefined não executa nada, dá erro
}
fn(function(){
    console.log("Callback")
})
fn()
// outra forma de fazer é:

function _fn(_cb){
    console.log("Executar ação")
    console.log(typeof _cb)
    typeof _cb === "function" && _cb()
}
function callback(){
    console.log("Outro teste do callback")
}
_fn(callback)

// outra coisa => clouger??

function fn2(n1){
    return function(n2){
        return n1 * n2
    }
}

const funcao2 = fn2(5)
const mult = funcao2(20)
console.log(mult)

//outra coisa + simples
function fn3(){
    fn3.count++
    return function _fn3(){
        console.log("Função retornada por parâmetro")
    }
}
fn3.count = 0
const funcao3 = fn3()
const funcao3a = fn3()
funcao3()
console.log(fn3.count)
