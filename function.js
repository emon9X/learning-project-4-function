{
    function myfunction(parameter1, parameter2) {
    return parameter1+parameter2;
}
let x = myfunction(10,5) /*here 10 and 5 are called argument passed to the function as parameter */
console.log(x);
}

{
//implicit return

function myfunction(parameter1, parameter2) {
    parameter1+parameter2;
}
let x = myfunction(10,5) /*here 10 and 5 are called argument passed to the function as parameter */
console.log(x); /* here x is undefined. no value is returned explicitly from the function*/
}