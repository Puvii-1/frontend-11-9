//FUNCTIONS - 15/10/25 - PRE-DEFINED FUNCTIONS
alert("Good Morning");
const ans = confirm("Are you human?");
console.log(ans);

//prompt = taking inputs from the user
const reply = prompt("What is your name?");
console.log(reply);

const answer = prompt("What is your name?");

if(answer){
    alert("Good Morning",answer);
}else{
    alert("INVALID");
}

const userName = "Janki";
console.log(`good morning ${userName}`);


const num1 = +prompt('Enter num1 : ');
const num2 = +prompt('Enter num2 : ');
const sum = num1 + num2 ;

console.log(sum);

// 3 ways to convert string into number :
// 1] add '+' sign infront of thr string 
// 2] Number("10")
// 3] parseInt("10")

console.log(typeof console);
console.log(typeof console.log);







console.log(Date.now());