// function increment(){
//     console.log("The button was clicked");
// }
//0 ko badao
//Camel Case :-in java script when we capitalise first letter of the second  word not the first letter of the first word normal convetion in java script
// note we use the functions like log or getElementById which are hooked in console and document respectively
let countEl=document.getElementById("h2");//stores the value of the text inside the inner html here we are passing argument argument is h2
console.log(countEl);
let count=0;
function increment(){
    count=count+1;
    // console.log(count);
    // document.getElementById('h2').innerText=count; or we can use
    countEl.innerText=count;
}
function save(){
    console.log(count);
}
