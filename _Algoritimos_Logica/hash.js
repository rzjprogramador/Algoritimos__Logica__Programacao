/*
COM HASH VC CONSEGUE ESTRUTURAR DADOS
SE VC QUISER MOSTRAR DADOS DE CADA USUARIO VC CONSEGUE COM HASH {} PQ OS DADOS ESTARAO ESTRUTURADOS POR ENTIDADE
*/

// Criando um array vazio alunos, para armazenar hash {dados estruturados de aluno}

alunos = []

aluno = {
    nome: "Reinaldo",
    notas: [10, 10],
    media: 10

}


// Adicionando o hash de aluno no array alunos
alunos.push(aluno)

// Acessando propriedades do hash
alunos[0].nome

// ==================================
// Criando outro Hash 
aluno2 = {
  nome: "Gustavo",
  notas: [20, 20],
  media: 20
}
// Adicionando no array alunos[]
alunos.push(aluno2)

// Acessando propriedade nome do novo aluno2
alunos[1].nome
