import entraDados from "readline-sync"

let num_alunos = entraDados.questionFloat("Digite o numero de alunos")
let cont_alunos = 0
let aluno_nota = 0
let alunomf=[]
let alunonat=1

while (cont_alunos<num_alunos) {
    while (alunonat<5){
        let notaa = entraDados.questionFloat("Digite a nota do aluno:")
            aluno_nota+=notaa
            alunonat++
        

    }
    console.log(`nota do aluno: ${aluno_nota/4}`)

    alunomf=+aluno_nota/4
    alunonat=1
    aluno_nota=0
    cont_alunos++
}


console.log(`Nota da turma: ${alunomf/num_alunos}`)