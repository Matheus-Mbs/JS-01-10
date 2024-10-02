let alunos = []
let notas = 0
let alunosRec = []

for(let i = 0; i < 5; i++){
    let nome,nota
    nome = prompt('Digite o nome do Aluno: ')
    nota = Number(prompt('Digite a nota do Aluno que foi passado anteriormente: '))
    alunos.push({nome: nome, nota: nota})
    notas += nota
}

notas = notas/5

for(let i = 0;i < 5;i++){
    let alunoIndv
    alunoIndv = alunos[i]
    if(alunoIndv.nota < notas){
        alunosRec.push(alunoIndv.nome)
    }
}

console.log(alunosRec)