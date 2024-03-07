import entraDados from "readline-sync";

let numero1 = entraDados.questionFloat("Informe o seu Primerio numero: ")
let numero2 = entraDados.questionFloat("Informe o seu Segundo numero: ")
console.log('Operações disponiveis:\nMultiplicação: "*"\nDivisão: "/"\nAdição: "+"\nSubtração:"-"')
let operacao = entraDados.question("Informe o sua Operação: ")


switch (operacao) {
    case "*":
        console.log(numero1 * numero2)

        break;
    case "/":
        console.log(numero1 / numero2)

        break;
    case "+":
        console.log(numero1 + numero2)


        break;
    case "-":
        console.log(numero1 - numero2)


        break;


    default:

    console.log("Informações invalidas")
        break;
}