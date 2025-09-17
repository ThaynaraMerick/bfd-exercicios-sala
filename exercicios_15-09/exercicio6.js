let contaBancaria = {
    titular: "Thaynara",
    Saldo: 250,

    Depositar:function(valor){
        this.estoque += valor;
        console.log(`deposito ${valor} ${this.saldo}(s). saldo atual: ${this.saldo}`);
    }
}