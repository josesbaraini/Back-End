import entraDados from "readline-sync"

const numero=(Math.random() * 100).toFixed(0)
let secr;

do {
    
    secr=entraDados.questionInt("Digite o numero secreto")
    if (secr==numero) {
        console.log("vitoria!")
    }
        
    
    else if(secr>numero)
        console.log("Muito grande")

    
    else if(secr<numero)
        console.log("Muitop")

    
    
} while (numero!=secr);

