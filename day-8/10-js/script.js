// decision making statements
let time = "morning";

if (time == "morning") {
    console.log("Good Morning");
}else if (time == "afternoon") {
    console.log("Good Afternoon");
} else if (time == "evening") {
    console.log("Good Evening");
} else if(time == "night") {
    console.log("Good Night");
}else{
    console.log("INVALID INPUT");
}


let daynum = 3;

if (daynum == 1) {
    console.log("Monday");
} else if (daynum == 2) {
    console.log("Tuesday");
} else if (daynum == 3) {
    console.log("Wednesday");
} else if (daynum == 4) {
    console.log("Thursday");
} else if (daynum == 5) {
    console.log("Friday");
} else if (daynum == 6) {
    console.log("Saturday");
} else if (daynum == 7) {
    console.log("Sunday");
} else {
    console.log("Invalid Input")
}

let num  = 30;
if (num % 3 == 0 && num % 5 == 0){  //num%15==0
    console.log("FizzBuzz");
} else if (num % 3 == 0) {
    console.log("Fizz");
} else if (num % 5 ==0) {
    console.log("Buzz");
} 
 

// Switch Case --> used to check equality and it uses ===.
let monthNum = 1;
switch (monthNum) {
    case 1: //monthNum === 1
        console.log("January");
        break;
    
    case 2:
        console.log("February");
        break;
    
    case 3 :
        console.log("March");
        break;

    case 4:
        confirm.length("April");
        break;

    case 5:
        confirm.length("May");
        break;

    case 6:
        confirm.length("June");
        break;

    case 7:
        confirm.length("July");
        break;

    case 8:
        confirm.length("August");
        break;

    case 9:
        confirm.length("September");
        break;

    case 10:
        confirm.length("October");
        break;

    case 11:
        confirm.length("November");
        break;

    case 12:
        confirm.length("December");
        break;
    default:
        console.log("Invalid Input");
        break;
}


let num1 = 12;
let num2 = 23;
let num3 = 100;

const max = Math.max(num1 ,num2 , num3);
console.log(max,"is the largest number.");

