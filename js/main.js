/* Code for WATS 3020 FizzBuzz Assignment */

var isInteger,
    maxNumber,
    fbResults,
    fbText;


// TODO: Initialize a variable `isInteger` to use as a control value for the
// `while` loop. Set the initial value to `false`.

isInteger = false;

// TODO: Create a `while` loop so user will be prompted to enter a number until
// they enter a good number. This loop should be controlled by a conditional
// expression that looks at the value of `isSafeInteger`. When `isSafeInteger`
// becomes `true`, the `while` loop should stop looping.
while (!isInteger) { //run while isInteger = false
    maxNumber = prompt('Please enter a whole number greater than 0.', 20); // default 20
    maxNumber = parseInt(maxNumber, 10);//convert string to an integer
    if (Number.isSafeInteger(maxNumber) && maxNumber > 0)    //check if number is safe integer and is greater than 0, if yes, change isInteger to true
    isInteger = true;  
}
// TODO: Inside `while` loop prompt the user for the `maxNumber` value.

// TODO: Inside the `while` loop, use a conditional to verify if the `maxNumber`
// is a suitable integer. (It should be an integer greater than zero.)

// TODO: If the value of `maxNumber` is suitable, then change the value of
// `isInteger` so the `while` loop stops looping.

// TODO: Initialize the `fbResults` variable to an empty Array

fbResults = [];

// TODO: Create a `for` loop that will execute the `maxNumber` of times.


for (let i=1; i<= maxNumber; i++){
        if ((i % 5 === 0) && (i % 3 ===0)){
        fbResults.push('fizzbuzz');
    }
    else if (i % 3 === 0) {
        fbResults.push('fizz');        
    }
    else if (i % 5 === 0) {
        fbResults.push('buzz');
    }
    else fbResults.push(i); 
}




// TODO: Create logic inside the `for` loop to calculate FizzBuzz.  This will
// require the use of several conditional statements that use the `%` operator.
// Store the results of this logic in an array called `fbResults`.

// TODO: In preparation for creating the output text for your FizzBuzz results,
// initialize the `fbText` variable to an empty string.

fbText = "";

// TODO: Use a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.
for (let result of fbResults) {
    fbText = fbText + result + "\n";
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
