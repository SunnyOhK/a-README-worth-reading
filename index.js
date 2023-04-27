// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const instructions = `Welcome to "A README.md Worth Reading." You will be prompted to answer a series of questions, and our command line generator will take care of the rest!`;

const generateMarkdown = ({ title, username, deployedURL, license, what, why, installation, usage, includeImg, contributing, authors, acknowledgment })

console.log(instructions);

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (no formatting or special syntax required)',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your GitHub repository?',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'deployedURL',
        message: 'What is URL for your deployed application?',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'BSD 3-clause', 'LGPLv3','AGPLv3', 'Unlicense', 'other'],
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What was your motivation for creating this project/ application?',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build it, and what problem does it solve?',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your application?',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does your application work? Provide detailed steps outlining navigation and functionality.',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'includeImg',
        message: 'Please include any relevant screenshots using the following syntax: ![alt text](folder/folder/image-title.png)  OR  <img src = folder/folder/image-title.png>',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'confirm',
        name: 'contributing',
        message: 'Would you like to make your project open source for collaborators to contribute?',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Please list any developers with whom you collaborated on this project. You may list one at a time to generate a bulleted list as the next question will prompt you for additional authors.',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addAuthors',
        message: 'Are there any other contributors you would like to mention? Please provide their names and a link to their GitHub Repository.',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'acknowledge',
        message: 'Please list any additional resources for which you would like to give credit. You may list one at a time to generate a bulleted list as the next question will prompt you for additional acknowledgements.',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addAck',
        message: 'Are there any other resources you would like to mention?',
        validate: function (value) {
            if (!value) {
                console.log('Please provide your response.');
                return false;
            } else {
                return true;
            }
        }
    },
];

inquirer
    .prompt([questions])

    .then((answers) => {
    const pageContent = generateMarkdown(answers);
})


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
