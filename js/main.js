/* Code for WATS 3020 FizzBuzz Assignment */

var isInteger,
    maxNumber,
    fbResults,
    fbText;

isInteger = false;

while (isInteger === false){
    
    maxNumber = prompt('Please enter a whole number greater than 0:');   
           
    maxNumber = parseInt(maxNumber, 10);//convert string to an integer      
    
    if (Number.isSafeInteger(maxNumber) && maxNumber > 0)    //check if number is safe integer and is greater than 0, if yes change isInteger to true
    isInteger = true;       
    
    else alert ('Sorry, that is not a whole number. Please try again.');
}

fbResults = [];

for (let i=1; i<= maxNumber; i++){
        if ((i % 5 === 0) && (i % 3 ===0)){
        fbResults.push('FizzBuzz');
    }
    else if (i % 3 === 0) {
        fbResults.push('Fizz');        
    }
    else if (i % 5 === 0) {
        fbResults.push('Buzz');
    }
    else fbResults.push(i); 
}

fbText = "";

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
