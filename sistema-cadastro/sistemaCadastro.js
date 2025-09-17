let listaAlunos = [];

function cadastrarAluno (nome, idade, curso, nota) {
    return {
        nome,
        idade,
        curso,
        nota,
        apresentar(){
            return `Meu nome é ${this.nome}, tenho ${this.idade} anos e estou cursando ${this.curso}. Minha nota foi ${this.nota}`;
        }
    };
}

function listarAlunos(lista){
    console.log("=== Lista de ALunos ===");
    for (let aluno of lista) {
        console.log(aluno.apresentar());
        console.log("Situação final: ", verificarSituacao(aluno.nota));

        console.log("------------");
    }
}

function calcularMedia(lista) {
    let soma = 0;
    for (let aluno of lista) {
        soma += aluno.nota;
    }
    return soma / lista.length;
}

function verificarSituacao(nota) {
    if (nota >= 60){
        return "Aprovado";
    } else if (nota >=40){
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function filtrarAprovados (lista){
    return lista.filter(aluno=> verificarSituacao(aluno.nota)=== "Aprovado");
}