//LOOPS:-
// 1] initialization -> let num
// 2] condition -> num<=  if condition not true -- loop end
// 3] task execution -> console.log
// 4] updation -> num++
for(let num = 1; num <= 10 ; num++){
    console.log("Sorry" , num);
    console.log("Really Sorry")
}
console.log('Out of the loop');

for(let num = 1; num<=15; num++){
    console.log("Purvi Patil",num);
}


// //print odd numbers from 1 to 20
for(let num =1; num<=20;num++){
    if(num%2!=0){
        console.log(num);
    }
    
}

//Even numbers from 1 to 20
for(let num = 0; num<= 20; num=num+2){
        console.log(num);
}

for(let num = 5; num<= 50; num = num+5){
    console.log(num);
}

// reverse 
for(let num = 100 ; num <= 1; num--){
    console.log(num);
}

// continue --> to skip the iteration.
// break --> to stop or break the loop.

//label loops
outerLoop:
for(let i = 1; i<=5; i++){
    console.log("Hello");

    innerLoop:
    for(let j =1; j<= 5; j++){
        if(j == 2){
            continue outerLoop;
        }
        console.log("Hii");
    }

}
//PATTERN
for (let p=0; p<=5; p++){
    console.log("*",p)
    for(let q=0; q<p; q++){
        console.log("*",q)
    }
}

let sum=0;
for(let m=0;m<=10;m++){
    sum+=m;
}
console.log(sum);



