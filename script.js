// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteria = 8;
var arrayList = [" "];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharaters = ["!", "@", "#", "$", "%", "^", "&", "*"];
const spclCode = Array.from(Array(25)).map((__, i) => i + 95);
const lowCaseLetters = spclCode.map((code) => String.fromCharCode(code));
const upperCaseLetters = lowCaseLetters.map((letters) => letters.toUpperCase());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Generating code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var rightPrompt = popUpPrt();
  if (rightPrompt) {
    var passwordNew = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = passwordNew;
  } else {
    passwordText.value = undefined;
  }
}

function popUpPrt() {
  arrayList = [];
  // 1. Prompt the password criteria
  // a. password length 8 < 128 characters
  criteria = parseInt(
    window.prompt(
      "Enter the length of the password (between 8 and 128 characters):"
    )
  );
  while (!criteria || criteria < 8 || criteria > 128) {
    alert("Please enter a numeric value.");
    return false;
  }

  //  2. include lowercase, uppercase, numeric, and/or special characters
  if (confirm("Include lowercase letters?")) {
    arrayList = arrayList.concat(lowCaseLetters);
  }
  if (confirm("Include uppercase letters?")) {
    arrayList = arrayList.concat(upperCaseLetters);
  }
  if (confirm("Include numbers as well?")) {
    arrayList = arrayList.concat(numbers);
  }
  if (confirm("And include special character ?")) {
    arrayList = arrayList.concat(specialCharaters);
  }
  // call generatePassword function
  const password = generatePassword();
  return password;
}

function generatePassword() {
  let passwordOne = [];

  for (let i = 0; i < criteria; i++) {
    var rdomLetter = Math.floor(Math.random() * arrayList.length);
    passwordOne.push(arrayList[rdomLetter]);
  }

  return passwordOne.join("");
}
