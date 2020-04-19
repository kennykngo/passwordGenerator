// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbolChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  ")",
  "_",
  "+",
  "{",
  "}",
  ":",
  "<",
];
var lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Write password to the #password input

// function writePassword(num, arr) {
//   var possibilityIndex = 0;
//   var passWord = "";
//   var targetArray = [];

//   for (var i = 0; i < num; i++) {
//     targetArray = arr[possibilityIndex];
//     possibilityIndex++;

//     passWord += targetArray[Math.floor(Math.random() * targetArray.length)];

//     if (possibilityIndex === arr.length) {
//       possibilityIndex = 0;
//     }
//   }

//   var passwordArr = passWord.split("");
//   var arrayLength = passwordArr.length;
//   var scrambledPassword = "";
//   var rand = 0;

//   for (var i = 0; i < arrayLength; i++) {
//     rand = Math.floor(Math.random() * passwordArr.length);
//     scrambledPassword += passwordArr.splice(rand, 1);
//   }

//   return scrambledPassword;

//   // var password = generatePassword();
//   // var passwordText = document.querySelector("#password");

//   // passwordText.value = password;
// }

// console.log(writePassword(10, [symbolChar, lowerChar, upperChar, numChar]));

// generateBtn.addEventListener("click", writePassword);

function writePassword(num, arr) {
  var possibilityIndex = 0;
  var passWord = "";
  var chosenChar = [];
  var targetArray = [];

  var passLength = prompt(
    "How many characters would you like your password to be? (8-128)"
  );
  if (passLength < 8 || passLength > 128) {
    alert("Length must be between 8 to 128.");
    return;
  } else {
    var upperCase = confirm("Would you like to use uppercase letters?");
    var lowerCase = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use symbols?");
  }
  if (
    upperCase !== true &&
    lowerCase !== true &&
    numbers !== true &&
    symbols !== true
  ) {
    alert("You must select at least one character type.");
    return;
  }
  if (upperCase === true) {
    chosenChar += upperChar;
  }
  if (lowerCase === true) {
    chosenChar += lowerChar;
  }
  if (symbols === true) {
    chosenChar += symbolChar;
  }
  if (numbers === true) {
    chosenChar += numChar;
  }
  var chosenArray = chosenChar.split(",");
  console.log(chosenArray);
  for (var i = 0; i < +passLength; i++) {
    passWord += chosenArray[Math.floor(Math.random() * chosenArray.length)];
  }
  // alert(passWord);
  //   // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var passwordText = document.querySelector("#password");
  passwordText.value = passWord;

  //   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//   console.log(passLength);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
