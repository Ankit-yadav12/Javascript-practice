//print hello world n times
let n = 5;
if(isNaN(n)){
    console.log("Invalid input");
}else{
    for(let i = 1;i<=n;i++){
        console.log("hello world");
    }
}


//print numbers upto n
for (let i = 1;i<=n;i++){
    process.stdout.write(i+ " ");
}console.log();


//print natural numbers from n to 1
for(let i = n;i>=1;i--){
    process.stdout.write(i+ " ");
}console.log();

//print a table of a number
for(let i = 1;i<11;i++){
    console.log(`${n} X ${i} = ${n*i} `);
}

//print sum upto  n terms
let sum = 0;
for(let i =1; i<=n;i++){
    sum += i;
}
console.log(`sum: ${sum}`);

//factorial of a number n
let fact = 1;
if(n ==0) fact = 1;
else{
    for(let i = 1;i<=n;i++){
        fact *=i;
    }
}
console.log(`factorial of ${n} : ${fact}`);


//program to separately print the sum of odd and even numbers in a range
let a = 2;
let b = 5;
var evenSum = 0;
var oddSum = 0;

for(var i = a;i<=b;i++){
    if(i%2==0) evenSum = evenSum+i;
    else oddSum= oddSum+i;
}

console.log("the sum of odd numbers: " + oddSum);
console.log("the sum of even numbers: " + evenSum);


//program to print the factors of a number
let number = 40;
process.stdout.write(`factors of ${number}: `)
for ( var i = 0;i<=number/2;i++){
    if(number%i==0) process.stdout.write(i+" ");
}console.log();

//program to find if a number is prime or not;
n =  13;
function isPrime(n){
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    for(let i = 3;i<=Math.sqrt(n);i+=2){
        if(n%i==0) return false;
    }
    return true;
}
console.log("the number is prime:" + isPrime(n));


//program to find exponent of a number
let base = 2;
let expo = 5;

console.log("the result of exponent is: " + Math.pow(base,expo))
