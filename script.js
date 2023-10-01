// Assignment Code
var generateBtn = document.querySelector("#generate");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialCharaters = ["!", "@", "#", "$", "%", "^", "&", "*"];
const spclCode = Array.from(Array(25)).map((__, i) => i + 95);
const lowCaseLetters = spclCode.map((code) => String.fromCharCode(code));
const upperCaseLetters = lowCaseLetters.map((letters) => letters.toUpperCase());
console.log(upperCaseLetters);

function generatePassword() {
  
  length = parseInt(
    window.prompt(
      "Enter the length of the password (between 8 and 128 characters):"
    )
  );

  //   // console.log("length", length); // // Prompt for including lowercase letters
  //   includeLowercase = window.confirm("Include lowercase letters?");
  //   console.log("lower case", includeLowercase);
  //   // // Prompt for including uppercase letters
  //   includeUppercase = window.confirm("Include uppercase letters?");

  //   // // Prompt for including numbers
  //   includeNumbers = window.confirm("Include numbers?");

  //   // // Prompt for including special characters
  //   includeSpecialChars = window.confirm("Include special characters?");

  // return criteria;
}

// // var passwordCriteria = getPasswordCriteria();
// // console.log(passwordCriteria);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
