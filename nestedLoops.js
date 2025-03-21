//print right angled triangle with "*"
let prompt = require("prompt-sync")();
let n= Number(prompt("enter the number of rows: "));

for(let i = 1;i<=n;i++){
    for(let j = 1;j<=i;j++){
        process.stdout.write("* ");
    }
    console.log();
}


//print right triangle with using numbers;
for(let i = 1;i<=n;i++){
    for(let j = 1;j<=i;j++){
        process.stdout.write(`${j} `);
    }
    console.log();
}

//print right triangle using alphabets
for(let i = 0;i<n;i++){
    for(let j = 0;j<=i;j++){
        process.stdout.write(`${String.fromCharCode(65+j)} `);
    }
    console.log();
}

//Inverted Right Triangle- Star Pattern;
for(let i = n;i>0;i--){
    for(let j = 1;j<=i;j++){
        process.stdout.write("* ");
    }
    console.log();
}

//Mirrored right Triangle- Star Pattern;
for(let i = 1;i<=n;i++){
    for(let j = 1;j<=n-i;j++){
        process.stdout.write("  ");
    }
    for(let j = 1;j<=i;j++){
        process.stdout.write(" *");
    }
    console.log();
}

// Print a V-Shape Pattern
for(let i = 1;i<=n;i++){
    for(let j = 1;j<2*n;j++){
        if(j==i || j==2*n-i){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();
}

//Print a X-Shape Pattern
for(let i = 1;i<=n;i++){
    for(let j = 1;j<=n;j++){
        if(j==i || j+i==n+1){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }
    }
    console.log();
}
