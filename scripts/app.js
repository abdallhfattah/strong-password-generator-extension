
const digits = [...Array(10)].map((_, i) => i);
const special = ['+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':' , '%' , '/', '@' , '$'];
const lowerCaseLetters = [...Array(26)].map((_, i) => String.fromCharCode(i+97)); // a = 97
const upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());

// const upperCaseLetters = [...Array(26)].map((_, i) => String.fromCharCode(i+65)); // A = 65

/*
console.log(digits)
console.log(lowerCaseLetters)
console.log(upperCaseLetters)
*/

// range input (password length)
const passwordLength = document.querySelector('input[type=range]');

// all checkBoxs input
const allCheckBoxes = document.querySelectorAll('input[type=checkbox]');

// generate password logic
const generatePassword = (length) => {
    console.log(length)
}

// lister to change event in bar slider
passwordLength.addEventListener('change' , e => {
    // generatePassword();
    let value = e.target.value;
    generatePassword(value)
});

allCheckBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        generatePassword(passwordLength.value);
    });
});

