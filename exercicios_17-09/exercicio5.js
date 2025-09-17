let numero = 7;

console.log(`Tabuada de ${numero} (for)`);

for (let i = 1; i <=10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log(`Tabuada de ${numero} (while)`);

let j = 1;
while(j <= 10){
    console.log(`${numero} x ${j} = ${numero * j}`);
    j++;
}