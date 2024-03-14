console.log("Digite o numero para a tabuada")

import entraDados from "readline-sync";

let numero = entraDados.questionFloat("Informe seu numero ");
let index = 0

while (index<=10) {
    console.log(`O numero ${numero} X ${index} = ${numero*index}`)
    index++
    
}
