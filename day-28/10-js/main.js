// how to access an element
const headingE1 = document.getElementById("my-h1");
console.log(headingE1);

// to change content
// innerHTML
// innerTEXT (only works with text) E SHOULD  NOT USE INNERHTML DUE TO SECURITY CLAUSES.
//  , textContent


console.log(headingE1.innerHTML);
console.log(headingE1.innerText);
console.log(headingE1.textContent);


function changeStyles(){
    headingE1.style.backgroundColor = "blue";
    headingE1.style.color = "yellow";
}

function changeContent(){
    headingE1.innerHTML = "Hello Purvi darling";
}