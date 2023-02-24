/*
    IMC = peso / altura2
    Deve retornar um único número
    Deve gerar um erro se receber um parâmetro não número
    Deve retornar erro caso não receba nenhum parâmetro
*/
function calcularImc(){
    let peso = Number(prompt("Digite seu peso:"))
    let alt = Number(prompt("Digite sua altura:"))
    let imc = peso / (alt * alt)
    if(typeof peso !== "number" || typeof alt !== 'number' ){
        throw Error("Only Numbers")
    }else if(peso === undefined || alt === undefined){
        throw Error("Digite algum número")
    }else if(imc >= 16){
        console.log(`Seu IMC é: ${imc.toFixed(1)}`)
        console.log(`Você está muito abaixo do peso.`)
    }else if(imc >= 17){
        console.log(`Seu IMC é: ${imc.toFixed(1)}`)
        console.log(`Você está abaixo do peso.`)
    }else if(imc >= 18,5){
        console.log(`Seu IMC é: ${imc.toFixed(1)}`)
        console.log(`Você está no peso normal.`)
    }else if(imc >= 25){
        console.log(`Seu IMC é: ${imc.toFixed(1)}`)
        console.log(`Você está acima do peso.`)
    }else if(imc >= 30){
        console.log(`Seu IMC é: ${imc.toFixed(1)}`)
        console.log(`Você está na obesidade grau I.`)
    }else if(imc >= 35){
        console.log(`Seu IMC é: ${imc.toFixed(1)}`)
        console.log(`Você está na obesidade grau II.`)
    }else{
        console.log(`Seu IMC é: ${imc.toFixed(1)}`)
        console.log(`Você está na obesidade grau III.`)
    }
    
}
console.log(calcularImc())