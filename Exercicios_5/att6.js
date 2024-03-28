import rl from "readline-sync";

let raio =rl.questionInt("Digite um raio")
const pi=3.14159

function calcularArea1(raio) {
    return ((raio)=> pi*(raio*raio)).ToFixed(2)
    
}

const calcularArea2= function (raio) {
    return ((raio)=> pi*(raio*raio)).ToFixed(2)
    
}

const calcularArea3 = ((raio)=> pi*(raio*raio)).ToFixed(2)

console.log(calcularArea1(raio),calcularArea2(raio),calcularArea3(raio))