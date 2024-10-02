let nums = []

for(let i = 0; i < 10; i++){
    nums[i] = prompt('Digite um número: ')
}

for(let i = 0; i < 10; i++){
    if(nums[i] < 0){
        console.log(nums[i])
    }
}