import entraDados from "readline-sync";

let categoria = entraDados.question("Informe o sua categoria: ")
let salario = entraDados.questionFloat("Informe o seu Salario: ")

if (categoria="A") {
    console.log(salario*1.05)
    
}
else if (categoria="B") {
    console.log(salario*1.1)
    
}


else if (categoria="C") {
    console.log(salario*1.15)
    
}

else if (categoria="D") {
    console.log(salario*1.20)
    
}


else {
    console.log("Dados invalidos inseridos")
    
}

