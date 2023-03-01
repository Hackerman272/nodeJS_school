let n = 100
let initialArr = []
let result = []
for (let i = 2; i <= n; i++){
    initialArr.push(i)
}

for (let j = 2; j <= n; j++){
    if (initialArr[j]){
        result.push(j)
        for (let k = j*2; k <= n; k += j){
            initialArr[k] = false
        }
    }
}

console.log(result)
