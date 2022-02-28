// Global Values

let upperCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaps = "abcdefghijklmnopqrstubwxyz";
let specialCharacter = "!<>{}&^%$#@^&*()/:;";
let numbers = "0123456789";
let allCharacter = "";
let length = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password Generation Section
function writePassword() {
  var length = parseInt(
    prompt('How many characters long would you like the password to be? It can be between 8 and 128 characters long.')
  );
  //Checks to make sure a number is put in
  if (Number.isNaN(length)) {
    alert('A password length must be provided as a number to continue.');
    return null;
  }
  //Makes sure that is not a number less than 8
  if (length < 8) {
    alert('The password is too short. It must be at least 8 characters.');
    return null;
  }
  //Makes sure that the number is no more than 128
  if (length > 128) {
    alert('The password is too long, it must be 128 or less characters'.);
    return null;
  }
  //Stores if specific types of characters are allowd to be used
  var addUppercase = confirm(

    'Please click the Ok button to allow the use of upper case leters.'
  );

  var addLowercase = confirm(

    'Please click the Ok button to allow the use of lower case letters.'
  );
  var addNumbers = confirm(

    'Please click the Ok button to allow the use of numbers.'
  );

  var addSpecialCharacter = confirm(

    'Please click the Ok button to allow the use of Special characters.'
  );


  if (addUppercase) {
    allCharacter += upperCaps;
  }

  if (addLowercase) {
    allCharacter += lowerCaps;
  }
  if (addSpecialCharacter) {
    allCharacter += specialCharacter
  }

  if (addNumbers) {
    allCharacter += numbers;
  }

  if (!allCharacter) {
    alert("At least one character type must be use for this to work. Please choose at least one.");
    writePassword();
  }

  //randomization part
  let newPassword = "";
  for (let i = 0; i < length; i++) {
    newPassword += allCharacter.charAt(Math.floor(Math.random() * allCharacter.length));
    console.log(newPassword);
  }

  //declare variable to select HTML DOM element and assign the value to be equal to newPassword variable
  let password = document.querySelector("#password");
  password.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
