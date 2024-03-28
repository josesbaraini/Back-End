import rl from "readline-sync";

let raio =rl.questionInt("Digite um raio")
const pi=3.14159

function calcularArea1(raio) {
    return pi*(raio*raio)
    
}

const calcularArea2= function (raio) {
    return (pi*(raio*raio))
    
}

const calcularArea3 = ((raio)=> pi*(raio*raio))

console.log(calcularArea1(raio).toFixed(2),calcularArea2(raio).toFixed(2),calcularArea3(raio).toFixed(2))