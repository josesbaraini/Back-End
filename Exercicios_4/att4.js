let num1=0
let num2=1
let numat=1
console.log(0)
for (let index = 1; index <= 19; index++) {
    console.log(numat)
    numat=num1+num2
    num1=num2
    num2=numat
}