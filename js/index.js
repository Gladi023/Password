
// Assignment code here
var generateBtn = document.querySelector("generate");
var Ualphabet =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["*", "&", "%", "#", "!"]
var length
var symbols
var numbers1
var lowerletters
var upperletters
var arrayinclude = []
var generatedPassword = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);