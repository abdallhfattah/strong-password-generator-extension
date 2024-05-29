
const digits = [...Array(10)].map((_, i) => i);
const special = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "%", "/", "@", "$"];
const lowerCaseLetters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)); // a = 97
const upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());

// generated password input
const generatedPasswordInput = document.getElementById('generatedPassword');

// range input (password length)
const passwordLength = document.querySelector('input[type=range]');

// all checkBoxs input
const allCheckBoxes = document.querySelectorAll('input[type=checkbox]');

// generate password logic
const generatePassword = (length) => {
    // updates the count in UI
    document.getElementById('charLengthSpan').textContent = passwordLength.value;
    
    // checked states
    const inlucdeDigits = document.getElementById('IncludeDigits').checked;
    const IncludeSpecialChars = document.getElementById('SpeicalChars').checked;
    const letterMix = document.getElementById('letterMix').checked;

    // defualt
    let possiblePasswordChars = [...lowerCaseLetters];

    if (inlucdeDigits) { possiblePasswordChars.push(...digits); }

    if (IncludeSpecialChars) { possiblePasswordChars.push(...special); }

    if (letterMix) { possiblePasswordChars.push(...upperCaseLetters); }

    // Clear the current value of the generated password input field to ensure a new password doesn't append to the old one
    generatedPasswordInput.value = '';

    for (let i = 0; i < length; i++) {
        generatedPasswordInput.value += (possiblePasswordChars[Math.floor(Math.random() * possiblePasswordChars.length)]);
    }
}

generatePassword(passwordLength.value)

// lister to change event in bar slider
passwordLength.addEventListener('change', e => {
    // generatePassword();
    let value = e.target.value;
    generatePassword(value)
});

allCheckBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        generatePassword(passwordLength.value);
    });
});



const copyPasswordBtn =document.getElementById('copyPassword');
const confirmation = document.getElementById('confirmation');

copyPasswordBtn.addEventListener('click' , () => {

    // copy the password
    navigator.clipboard.writeText(generatedPasswordInput.value);

    // toggle the confirmation active
    confirmation.classList.add('active');

    // remove the confirmation after 1.5s
    setTimeout(() => {
        confirmation.classList.remove('active');
    } , 1500);
});