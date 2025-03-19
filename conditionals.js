//accept two numbers and print the greatest number between them;
let a = 10;
let b = 12;

if(a==b) console.log("both numbers are equal");
else if (a>b) console.log("the greatest number is: " + a);
else console.log("the greatest number is: " + b);

//Accept an integer and check whether it is an even number or odd.
let c = 16;
if(c%2==0) console.log("even number");
else console.log("odd number");

//Accept name and age from the user. Check if the user is a valid voter or not.
let name = "Ankit";
let age = 22;
if(age>=18) console.log(`${name} is qualified to vote`);
else console.log(`${name} : not eligible to vote`)


//Accept three numbers and print the greatest among them.
a = 10;
b = 20;
c = 30;

if(a>b){
    if(a>c) console.log(`greatest number: ${a}`);
    else console.log(`greatest number: ${c}`);
}else{
    if(b>c) console.log(`greatest number: ${b}`);
    else console.log(`greatest number: ${c}`);
}

//Accept a year from user and check if it is a leap year or not.
let year = 2003;
if(year%4==0){
    if(year%100!=0) console.log(`${year} is a leap year`);
    else if(year%400==0) console.log(`${year} is a leap year`);
    else console.log("Not a leap year");
}else{
    console.log("Not a leap year");
}
