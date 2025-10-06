//Equality operators

//i) equal to operators (==)
//ii) not equal to (!=) {checks for content only.}
//iii) strict equality (===) {content + datatype.}
///iv) strict not equality (!==)
let num1 = 12;
let num2 = 87;

console.log(num1==num2);

console.log("10"==10);

console.log("10"===10);


// pre-increment and decrement operator
let num = 10;
console.log(++num);//11
let num0 = 16
console.log(--num0);//15

// post-increment operator
let num3 = 20;
console.log(num3++) //20
console.log(num3); //21


// Compound assignment operator
let num4 = 20;
num += 10;
console.log(num4);


//Logical operators
//AND(&&)    //OR(||)    //NOT(!)
console.log(false && true); 
console.log(false || true);
console.log(!false);
console.log(false && console.log("hiii"));
console.log(false || "abcd"); //abcd
console.log(true || 0);


//short circuit operator(& , |)
//shift operator (left-shift , right-shift)
