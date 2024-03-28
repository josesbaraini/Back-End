import rl from "readline-sync";

let numero2 =rl.questionInt("Digite um numero")
let numero1 =rl.questionInt("Digite um numero")

function impopar(numero1,numero2) {
    return(numero1+numero2)
    
}


const imposivel = function (numero1,numero2) {
    return(numero1+numero2)
    
}

const meenganar = (numero1,numero2)=>numero1+numero2

console.log(impopar(numero1,numero2),imposivel(numero1,numero2),meenganar(numero1,numero2))