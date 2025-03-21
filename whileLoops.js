//sum of digits of a number
let number = 258;
let n = number;
let sum = 0;
while(number!=0){
    let digit = number%10;
    sum += digit;
    number = Math.floor(number/10);
}
console.log(`sum of digits of ${n}: ${sum}`);

//reverse a number
number = 53245;
let reversed = 0;
while(number!=0){
    let digit = number%10;
    reversed = reversed*10+digit;
    number = Math.floor(number/10);
}
console.log("reversed number: "+reversed);


//check if the number is automorphic or not
number = 6;
let temp = number;
let divisor = 1;
let isAutomorphic = false;
while(temp!=0){
    divisor *= 10;
    temp = Math.floor(temp/10);
}

if((Math.pow(number,2)%divisor)==number) isAutomorphic=true;

console.log("Automorphic: "+ isAutomorphic);


console.log(String.fromCharCode(66))
