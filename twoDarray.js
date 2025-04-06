// q. make a 2d Array, take input from user
let prompt = require('prompt-sync')();
let mainArr = Number(prompt("enter the size of Main array: "));
let arr = new Array(mainArr);
let subArr = Number(prompt("enter the size of sub arrays: "));

for(let i = 0;i<mainArr;i++){
    arr[i] = new Array(subArr);
    for(let j=0;j<subArr;j++){
        arr[i][j] = Number(prompt(`enter element ${i},${j}: `));
    }
}

// q. diagonal sum of a 2d Array.
let sum = '';
for(let i = 0;i<mainArr;i++){
    for(let j=0;j<subArr;j++){
        if(i==j || i+j==subArr-1){
            sum += arr[i][j];
        }
    }
}

// q.make a 2d array in one line
console.log(arr);
console.log("diagonal sum is : " + sum);
