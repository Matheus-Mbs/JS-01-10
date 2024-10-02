let a = []
let b = []
let c = []

function sortearNum(){
    let num = Math.floor(Math.random() * 999999999)
    return num
}

for(let i = 0; i < 5; i++){
    a[i] = Number(prompt('Digite um número: '))
}

for(let i = 0; i < 5; i++){
    b[i] = sortearNum()
}

for(let i = 0; i < 5; i++){
    c[i] = a[i] * b[i]
}

console.log(c)