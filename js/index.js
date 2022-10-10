

 // Assignment Code

 var generateBtn = document.querySelector("#generate");
 const Ualphabet =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
 const lowercaseARR = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 const numbersARR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 const specialARR = ["*", "&", "%", "#", "!"]
 var length
 var symbols
 var numbers1
 var lowercase
 var uppercase
 var arrayinclude = []
 var generatedPassword = ""



function criteria () {
  length = prompt("password length?")
  //minimum password length
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    criteria();
  }
  //max password length
  else if (length > 50) {
    alert("Password length must be less than 50 characters");
    criteria();
  }
  //resetting generated password if generate password is clicked again
  generatedPassword = ""
  return length
}

//lowercase used
function criteriaLower() {
  lowercase = confirm("do you want to have lowercase?");
return lowercase;
}

//uppercase used
function criteriaUpper() {
  uppercase = confirm("do you want to have uppercase?");
return uppercase;
  
}

//if numbers are used
function criterianumbers() {
  numbers1 = confirm("do you want to include numbers?");
return numbers1;
  
}

//if symbols are used
function criteriaSymbols() {
  symbols = confirm("do you want to include symbols?");
return symbols;
  
}

//using prompts to determine which characters are used in password
function createpassword () {
criteria();
criteriaLower();
criteriaUpper();
criterianumbers();
criteriaSymbols();

console.log(lowercase, uppercase, numbers1, symbols)
//if lowercase = true
if (lowercase) {
  arrayinclude = arrayinclude.concat(lowercaseARR);
}
//if uppercase = true
if (uppercase) {
    arrayinclude = arrayinclude.concat(Ualphabet);
  }
  //if uppercase = true
if (numbers1) {
  arrayinclude = arrayinclude.concat(numbersARR);
  }
  //if uppercase = true
if (symbols) {
  arrayinclude = arrayinclude.concat(specialARR);
}

for (i = 0; i < length; i++) {
  generatedPassword = generatedPassword + arrayinclude[Math.floor(Math.random()*arrayinclude.length)]
  }
  return generatedPassword
}
console.log(generatedPassword)

// Write password to the #password input
function writePassword() {
  var password = createpassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Add event listener to generate button
// //const specialCharacters = "!@#$%^&*()";
// const generateButton = document.getElementById('generate')
// function generatePassword() {
//     var passwordLength = prompt("Please enter number of characters between 8 and 128.")
//     generatePassword();
// //generateButton.addEventListener('click', writePassword);
// let lowercase = document.getElementById("lowerletters");
// let special = document.getElementById("special");
// let uppercase = document.getElementById("upperletters");
// let numbers = document.getElementById("number");