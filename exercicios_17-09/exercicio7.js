function calcularMedia(a,b,c = 0){
    let totalNumeros = c ===0 ? 2 : 3;
    return (a + b+ c)/ totalNumeros;
}

let media2 = calcularMedia(70,80);
let media3 = calcularMedia(70,90);

console.log(`Média de dois números : ${media2}`);
console.log(`Média de três números: ${media3}`);

function resultadoFinal(nota){
    if (nota >=60){
    return "Aprovado";
} else if (nota >=40){
    return "Recuperação";
} else {
    return "Reprovado";
    }
}

console.log(`Resultado final (nota 75): ${resultadoFinal(75)}`);
console.log(`Resultado final (nota 50): ${resultadoFinal(50)}`);
console.log(`Resultado final (nota 30): ${resultadoFinal(30)}`);


