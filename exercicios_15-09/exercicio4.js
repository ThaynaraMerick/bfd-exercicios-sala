let aluno = {
    nome: "Thaynara",
    curso: "Backend-js",

    apresentar:function(){
        console.log(`Olá, meu nome é ${this.nome} e eu estudo ${this.curso}.`);
    }
}


aluno.apresentar();