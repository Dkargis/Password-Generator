// Assignment Code
var generateBtn = document.querySelector("#generate");


const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var character = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", ",", ".", "?"];
var loweralpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperalpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pwarray = [];

//create a function to gather user criteria for their random password

function getPasswordCriteria(){

var upperCase = confirm("Do you want Uppercase letters")
console.log(upperCase)
var lowerCase = confirm("Do you want Uppercase letters")
console.log(lowerCase)
var numbers = confirm("Do you want Uppercase letters")
console.log(numbers)
var characters = confirm("Do you want Uppercase letters")
console.log(characters)
var passwordLenght = prompt("How many characters would you like your password to be (8-128)")
console.log(passwordLenght)

var passwordCriteria = {
length: passwordLenght,
hasUpperCase: upperCase,
hasLowerCase: lowerCase,
hasNumbers: numbers,
hasCharacters: characters,


}
console.log(passwordCriteria);
return passwordCriteria;



}




function generatePassword() {

  var result = [];
var passwordCriteria = getPasswordCriteria()
 if (passwordCriteria.hasCharacters){
   result = result.concat(upperalpha)
  console.log(result)
 }
 if (passwordCriteria.hasLowerCase){
  result = result.concat(loweralpha)
 console.log(result)
}
if (passwordCriteria.hasNumbers){
  result = result.concat(number)
 console.log(result)
}
if (passwordCriteria.hasCharacters){
  result = result.concat(character)
 console.log(result)
}
 
console.log(result)

var generatedPassword = ""

for (var i = 0; i < passwordCriteria.length; i++){
  generatedPassword += result[Math.floor(Math.random() * result.length)]
console.log (generatedPassword)
}

return generatedPassword

    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", generatePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password
  // passwordText.value = password;




}


