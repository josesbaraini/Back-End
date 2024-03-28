import rl from "readline-sync";

let numero =rl.questionInt("Digite um numero")
let porcentagem =rl.questionInt("Digite uma porcentagem")

function porsentagem(numero,porcentagem) {
    return(numero*(1+(porcentagem/100)))
    
}


const testes = function (numero,porcentagem) {
    return(numero*(1+(porcentagem/100)))
    
}

const numeros = (numero,porcentagem)=>numero*(1+(porcentagem/100))

console.log(porsentagem(numero,porcentagem),testes(numero,porcentagem),numeros(numero,porcentagem))