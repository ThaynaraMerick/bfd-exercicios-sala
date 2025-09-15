function isEven(num){
    return num % 2 === 0;
}

for (let i = 1; i <= 20; i++){
    if(isEven(i)){
        console.log(i);
    }
}