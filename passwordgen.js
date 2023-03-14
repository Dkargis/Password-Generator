// Assignment Code
var generateBtn = document.querySelector("#generate");


var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var character = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", ",", ".", "?"];
var loweralpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperalpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pwarray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  
  passwordText.value = password;

}

// function generatePassword() {
//   var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let result = ' ';
//   const numberLength = number.length;
//   for ( let i = 0; i < length; i++ ) {
//       result += number.charAt(Math.floor(Math.random() * numberLength));
//   }
//   return result;

// }

console.log(generatePassword(5));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click",  function() {
    generatePassword();
  });

function generatePassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
if (generatePassword){
  alert (result);
}

}

 
// console.log(generatePassword(5));