let aluno = {
    nome: "Thay",
    idade: 24,
    curso: "Computação",
    apresentar(){
        return `Meu nome é${this.nome}, tenho ${this.idade} e estudo ${this.curso}`
    }
};

console.log(aluno.apresentar());

aluno.nota = 85;
console.log(`A nota do aluno é: ${aluno.nota}`);