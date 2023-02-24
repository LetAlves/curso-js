/*
Deve receber peso, altura e uma função de callback opcional
Se não receber callback, retornar o imc calculado
Se receber callback, deve retornar o retorno do callback
*/
let peso = Number(prompt("Digite seu peso:"))
let alt = Number(prompt("Digite sua altura:"))
let imc = peso / (alt * alt)
function calcularIMC(classificaIMC){
    if(typeof peso !== "number" || typeof alt !== "number"){
        throw Error("Only numbers")
    }else if(peso == undefined || alt == undefined){
        throw Error("Must enter a number")
    }else if(typeof classificaIMC === "function"){
        classificaIMC()
    }
    console.log(`IMC é: ${imc.toFixed(1)}.`)
}
calcularIMC(function(){
    if(imc >= 16){
        console.log(`Você está muito abaixo do peso.`)
    }else if(imc >= 17){
        console.log(`Você está abaixo do peso.`)
    }else if(imc >= 18,5){
        console.log(`Você está no peso normal.`)
    }else if(imc >= 25){
        console.log(`Você está acima do peso.`)
    }else if(imc >= 30){
        console.log(`Você está na obesidade grau I.`)
    }else if(imc >= 35){
        console.log(`Você está na obesidade grau II.`)
    }else{
        console.log(`Você está na obesidade grau III.`)
    } 
})