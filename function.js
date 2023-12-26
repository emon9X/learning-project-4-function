{
    function sampleFunction(parameter1, parameter2) {
        return parameter1 + parameter2;
    }
    let x = sampleFunction(10, 5) /*here 10 and 5 are called argument passed to the function as parameter */
    console.log(x);
}
// -------------------------------------------------------
{
    //implicit return

    function sampleFunction(parameter1, parameter2) {
        parameter1 + parameter2;
    }
    let x = sampleFunction(10, 5) /*here 10 and 5 are called argument passed to the function as parameter */
    console.log(x); /* here x is undefined. no value is returned explicitly from the function*/
}
// -------------------------------------------------------
{
    //scope
    {

        function multiply(a, b) {
            let result = a * b;
            return result;
        }

        ; // product will be 12
        console.log(multiply(3, 4))
    }
    {
        console.log(multiply(3, 4)) /*a function can be called from another block */
    }
    {
        var result = multiply(5, 2)
    }
    console.log(result);
}
// -------------------------------------------------------
{
    // where return stops execution 
    function donExecute() {
        return
        console.log('hi');
    }

    function execute() {
        console.log('bye');
        return
    }

    function execute1() {
        return console.log('im at the same line with return')
    }

    donExecute();
    execute()
    execute1()
}
// -------------------------------------------------------