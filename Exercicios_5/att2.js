import rl from "readline-sync";

let numeros = rl.questionInt("Digite um numero")

function numero(numeros) {
    if (numeros%2==0) {
        return"par"
    }
    else{
        return"impar"
    }
    
}


const number = function (numeros) {
    if (numeros%2==0) {
        return"par"
    }
    else{
        return"impar"
    }
    
}

const inteiro = (numeros)=> {
    if (numeros%2==0) {
        return"par"
    }
    else{
        return"impar"
    }

}


console.log(number(numeros),numero(numeros),inteiro(numeros))