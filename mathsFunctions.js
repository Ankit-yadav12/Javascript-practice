console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));
console.log(Math.round(1.4));
console.log(Math.round(1.5));
console.log(Math.round(1.6));

console.log(Math.trunc(Math.random()*100))

console.log(Math.abs(-5));
console.log(Math.abs(5));

console.log(Math.pow(2,5));

console.log(Math.sqrt(25));
console.log(Math.sqrt(27));

console.log(Math.cbrt(27));

console.log(Math.max(1,2,3,4,5,6,7,9,8));
console.log(Math.min(1,2,3,4,5,6,7,9,8));

let a = 31234.432432;
console.log(a.toFixed(3));

//compound Interest calculate
let p = 1000;
let r = 5;
let t = 3;

let compoundInterest = (p*Math.pow(1+r/100,t))-p;
console.log("final amount with interest: "+ compoundInterest.toFixed(2));

//generate otp
let otp = Math.floor(Math.random()*9000+1000);
console.log("otp is: "+ otp);

//area of triangle by heron's formula
let s1 = 3;
let s2 = 4;
let s3 = 5;

if(s1+s2<s3 || s1+s3<s2 || s2+s3<s1){
    console.log("Not Possible");
}else{
    let s = (s1+s2+s3)/2;
let area = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
console.log("area fo triangle :" + area);
}

//circumference of circle
let radius = 10;
let circumference = 2*Math.PI*radius;
console.log("circumference of circle is: " + circumference.toFixed(3));
