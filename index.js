const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Lucas', nota: 4 },
    { nome: 'Carla', nota: 6 },
    { nome: 'Mariana', nota: 3 },
    { nome: 'Rafael', nota: 8 },
    { nome: 'Fernanda', nota: 7 },
    { nome: 'Gustavo', nota: 2 },
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6;
    });
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log('Alunos Aprovados:');
console.log(alunosAprovados);
