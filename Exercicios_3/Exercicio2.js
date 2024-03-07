import entraDados from "readline-sync";

let dia = entraDados.questionFloat("Informe seu dia: (1-7) ");

switch (dia) {
    case 1:
        console.log("Janeiro")
        break;

    case 2:
        console.log("Feverreiro")
        break;

    case 3:
        console.log("Março")
        break;

    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("Junho")
        break;
    case 7:
        console.log("Julho")
        break;

    case 8:
        console.log("Agosto")
        break;

    case 9:
        console.log("Abril")
        break;
    case 10:
        console.log("Maio")
        break;
    case 11:
        console.log("Junho")
        break;
    case 12:
        console.log("Julho")
        break;
    default:
        console.log("Esse dia n")
        break;
}