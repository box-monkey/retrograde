// Assignment code here

// Global variables delarations here
var passwordLengthMin = 8;
var passwordLengthMax = 128;
var passwordLength = passwordLengthMin
var characters = "";
var password = "";

// boolean selectors // true or false things
var useSpecialCharacters = false;
var useNumericalCharacters = false;
var useLowerCaseCharacters = false;
var useUpperCaseCharacters = false;


var debugMode = true;

function debugLog(msg, value = false) {
    // debugmode is the global boolean that controls if the console.log is rendered
    // if that's false then they all disappear at once, if they are true they will be shown
    if (debugMode && msg) {
        // checks if value is set, if not they wont render
        if (value) {
            console.log(msg, value);
        } else {
            console.log(msg);
        }
    }
}

// this function resets global variables 
function reset(){

     useSpecialCharacters = false;
     useNumericalCharacters = false;
     useLowerCaseCharacters = false;
     useUpperCaseCharacters = false; 
     passwordLength = passwordLengthMin;
     password = '';
}

// recursive function - will run and call itself - this function will prompt user 
// to choose which values will be in randomized password
function passwordLengthPrompt() {
    passwordLength = prompt('Password mustbe within 8 and 128 characters', passwordLengthMin)
if (passwordLength) {
    if(passwordLength < passwordLengthMin || passwordLength > passwordLengthMax) {
        // 
        window.alert(`Please enter an number between ${passwordLengthMin} and ${passwordLengthMax}!`);
        // this puts us into the recursive loop
        passwordLengthPrompt();
        }
     }
}

// real meat of the program, this will randomly generate characters based on global flags/var set.

function actuallyGeneratePassword() {
    // possible_results = ['$', 's', 'S', '61']
    // will use this as array to pull from
    const numbers = '0123456789';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!@#$%^&*()-+';

    // empty scope array
    let possibleResults = [];

    if (useSpecialCharacters) {
        const specialCharacter = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    // this will grab a random character between 0-1 from the string array and multiply by the string length
    possibleResults.push(specialCharacter); 

    }

    // determine if we are going to use numerical values if flag is set to true
    if (useNumericalCharacters) {
        const numericalCharacter = numbers.charAt(Math.floor(Math.random() * numbers.length));
        possibleResults.push(numericalCharacter);
    }
        // determine to use lower case characters if flag is set to true
    if (useLowerCaseCharacters) {
        const lowerCaseCharacter = lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        possibleResults.push(lowerCaseCharacter);
    }
        // determine to use upper case characters if flag is set to true
    if (useUpperCaseCharacters) {
        const upperCaseCharacter = upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        possibleResults.push(upperCaseCharacter);
    }
    

  // Since we have an array of unknown length (0 -> 4) we need to grab a random index inside of it
  // We use the same ideaology as the STRINGs above to grab the value from an random array index
  // If the length is set to 0, then we return null
debugLog('actuallyGeneratePassword possibleResults array:', possibleResults);

const randomElement = possibleResults[Math.floor(Math.random() * possibleResults.length)];
debugLog('actuallyGeneratePassword randomElement result:', randomElement);

return randomElement;
}

// this will be the main function of the application
function generatePassword() {
// will return function to proper state
reset();
// A recursive function will ensure you have a number between min and max
passwordLengthPrompt();
if (!passwordLength) {
    alert("Please enter a number");
    return null;
}

// There are prompts to set the flags
useSpecialCharacters = window.confirm("Would you like to use special characters?");
useNumericalCharacters = window.confirm("Would you like to use numerical characters?");
useLowerCaseCharacters = window.confirm("Would you like to use lower case characters?");
useUpperCaseCharacters = window.confirm("Would you like to use upper case characters?");


for (var i = 0; i < passwordLength; i +=1) {
    const randomChar = actuallyGeneratePassword();
    if (randomChar) {
        password += randomChar;
        // debugLog('output of actuallyGeneratePassword is: ', randomChar);
    }
}
    // dispaly results
    var passwordText = document.getElementById("password");
    passwordText.value = password;
}

// references to the #generate element
var generateBtn = document.getElementById("generate");

// add event listener to generate button
generateBtn.addEventListener("click", generatePassword);