//Calculate Sum and Mean og Array Elements;
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number of Elements: "));
let arr = [n];
let sum = 0;
for(let i = 0;i<n;i++){
    arr[i] = Number(prompt(`enter the ${i}th element: `));
    sum += arr[i];
}

let mean=sum/arr.length;

console.log(`sum : ${sum}`);
console.log(`mean : ${mean}`);

//Find the Greatest Element and its Index;
let secondMax ;
let max = 0;
for(let i =0; i<n;i++){
    if(arr[i]>max){
        secondMax = max;
        max = arr[i];
    }
}
console.log(`Greatest Element: ${max} `);
console.log(`Second Greatest Element: ${secondMax} `);

//Copy Array and Reverse;
let copyArr = arr;
n = arr.length;
for(let i = 0;i<n/2;i++){
    let temp = arr[i];
    arr[i] = arr[n-i-1];
    arr[n-i-1] = temp;
}
console.log(copyArr);

//given an array of 0 and 1's, move all the zeros to the end of the array;
let arr1 = [0,1,0,1,1];
let nonZeroIndex = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== 0) {
        arr1[nonZeroIndex] = arr1[i];
        nonZeroIndex++;
    }
}
while (nonZeroIndex < arr1.length) {
    arr1[nonZeroIndex] = 0;
    nonZeroIndex++;
}
console.log(arr1);
