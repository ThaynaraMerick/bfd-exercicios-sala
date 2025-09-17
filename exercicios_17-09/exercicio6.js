let compras = ["Arroz", "Feijão", "Ovos", "Farinha", "Leite"];

function imprimirRelatorio(lista){
    console.log("Lista de compras");
    for (let i = 0; i < lista.length; i++){
        console.log(`${i + 1} . ${lista[i]}`);
    }
}

imprimirRelatorio(compras);