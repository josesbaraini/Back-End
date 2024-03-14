import entraDados from "readline-sync"

let num_alunos = entraDados.questionFloat("Digite o numero de alunos")
let cont_alunos = 0
let aluno_nota = 0
let alunomf=0
let alunonat=1

while (cont_alunos<num_alunos) {
    while (alunonat<5){
        let notaa = entraDados.questionFloat(`Digite a ${alunonat} nota do ${cont_alunos+1} aluno:`)
            aluno_nota+=notaa
            alunonat++
        

    }
    console.log(`Média do ${cont_alunos+1} aluno: ${aluno_nota/4}`)

    alunomf=(aluno_nota/4)+alunomf
    alunonat=1
    aluno_nota=0
    cont_alunos++
}


console.log(`Média da turma: ${alunomf/num_alunos}`)