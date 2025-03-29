//rotate the array to the left by one position
// Example: [1,2,3,4,5] => [2,3,4,5,1]
let arr = [1,2,3,4,5,6];
console.log(arr);
let temp = arr[0];
for(let i = 0;i<arr.length-1;i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = temp;
console.log(arr);

//linear search
console.log("Linear Search");
arr = [1,2,3,4,5,6];
let target = 5;
let index = -1;

for (let i= 0;i<arr.length;i++){
    if(arr[i] ===target){
        index = i;
        break;
    }
}
console.log("Index of target is: " + index);


//bubble sort
console.log("Bubble Sort");
arr = [5,4,3,2,1];
console.log(arr);
for(let i = 0;i<arr.length-1;i++){
    for(let j = 0;j<arr.length-i-1;j++){
        if(arr[j] >arr[j+1]){
            let temp =arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;        
        }
    }
}
console.log(arr);

//insertion sort
console.log("Insertion Sort");
arr = [5,4,3,2,1];
console.log(arr);
for(let i = 1;i<arr.length;i++){
    if(arr[i]<arr[i-1]){
        let temp = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}
console.log(arr);

//selection sort
console.log("Selection Sort");
arr = [3,2,9,10,5,6,7,3,4];
console.log(arr);
for(let i = 1;i<arr.length;i++){
    let smallindex = i;
    for(let j = i;j<arr.length;j++){
        if(arr[j] <arr[smallindex]){
            smallindex =j;
        }
    }
    if(arr[i-1]>arr[smallindex]){
        let temp = arr[i-1];
        arr[i-1] = arr[smallindex];
        arr[smallindex] = temp;
    }
    process.stdout.write(arr[i-1] + " ");
}
