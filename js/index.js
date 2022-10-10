

 // Assignment Code

 var generateBtn = document.querySelector("generate");
 const Ualphabet =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
 const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 const special = ["*", "&", "%", "#", "!"]
 var length
 var symbols
 var number
 var lowerletters
 var upperletters
 var arrayinclude = []
 var generatedPassword = ""


// Add event listener to generate button
//const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generate')
function generatePassword() {
    var passwordLength = prompt("Please enter number of characters between 8 and 128.")
    generatePassword();
//generateButton.addEventListener('click', writePassword);
let lowercase = document.getElementById("lowerletters");
let special = document.getElementById("special");
let uppercase = document.getElementById("upperletters");
let numbers = document.getElementById("number");