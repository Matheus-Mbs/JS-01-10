let numsRand = []

for(let i = 0;i < 10;i++){
    numsRand[i] = Math.floor(Math.random() * 1000);
}

let a = Number(prompt('Digite onde o intervalo começa: '))
let b = Number(prompt('Digite onde o intervalo termina: '))

for(let i = 0;i < 10;i++){
    if(numsRand[i] > a && numsRand[i] < b){
        console.log(numsRand[i])
    }
}