let produto = {
    nome: "caneta",
    preco: 2.50,
    estoque: 3,

    vender:function(qtd){
        if (qtd <= this.estoque){
            this.estoque -= qtd;
            console.log(`Vendidos ${qtd} ${this.nome}(s). Estoque atual: ${this.estoque}`);
        } else {
            console.log(`Não há estoque suficiente para vender  ${qtd} ${this.nome}(s). Estoque atual: ${this.estoque}`);
        }
    },

    repor:function(qtd){
        this.estoque += qtd;
        console.log(`Repostos ${qtd} ${this.nome}(s). Estoque atual: ${this.estoque}`);
    }
};

produto.vender(3);
produto.repor(5);
produto.vender(15);