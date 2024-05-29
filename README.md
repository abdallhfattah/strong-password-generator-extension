# Random Password Generator Readme

## Overview
This application is a random password generator built using HTML, CSS, and JavaScript. It allows users to generate secure passwords of variable length and complexity.

## Features
- Adjustable password length using a range input slider.
- Options to include digits, special characters, and mix letter cases.
- Real-time generation of passwords based on user preferences.
- Copy generated password to clipboard with a single click.
- Visual confirmation of password copy operation.

## Usage
1. Open the `index.html` file in a web browser.
2. Adjust the password length using the range input slider.
3. Check/uncheck options to include digits, special characters, and mix letter cases as desired.
4. The generated password will be displayed in the designated input field.
5. Click the "Copy Password" button to copy the generated password to the clipboard.
6. A confirmation message will briefly appear to indicate successful copying.

## Implementation Details
- `index.html`: Contains the structure of the web page, including inputs and buttons.
- `style.css`: Provides styling for the UI elements.
- `script.js`: Implements the logic for generating passwords and handling user interactions.
  
## Adding Code
To add code to the JavaScript file (`script.js`):
1. Define the character sets for digits, special characters, lowercase letters, and uppercase letters.
2. Access DOM elements for password inputs, range inputs, and checkboxes.
3. Implement the `generatePassword` function to create passwords based on user preferences.
4. Attach event listeners to handle changes in password length, checkbox states, and copying passwords.

## Demo
![Demo GIF](demo.gif)