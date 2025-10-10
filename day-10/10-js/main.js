//WHILE LOOPS - used when you don't know the exact number of iteration.
// 1] initialization
// 2] condition
// 3] task
// 4] updation

let num = 1;
while(num <= 10){
    console.log(num);
    num++;
}

let i = 2;
while(i<=20){
    console.log(i);
    i = i +2;
}

// DO WHILE LOOP
// 1] initialization;
// do {
//    2] task 
//    3] updation;
//} 4] while(condition)
// irrespective of the  condition do while will exceute the program atleast once.

//print all thenumbers from 1 to 10 using do while
let j = 1;
do{
    console.log(j);
    j++;
} while(j<=10)

// 1] understand the problem
// 2] break the problem into sub-problems
// 3] try to write step-wise solution in english .
// 4] Flowchart 

let sum = 0;
for  (let i = 1; i<=10;i++){
    sum += i;
}
console.log("The sum is",sum)

// n(n+1)/2 --> sum formula

for (num = 1 ; num<=100;num++){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(num % 3 == 0){
        console.log("Fizz");
    }
    else if(num % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }

}

let sumi = 0;
for(num = 1 , num<=50; num = num + 2;){
    sumi += num;
}
console.log("The sum of odd numbers is",sumi);