const inquirer = require('inquirer');

// MINI PROJECT BONUS: promises module as an alternative to using callbacks with file system methods.
const fs = require('fs');
const util = require('util');
const { writeFile } = fs.promises;


// USE THE PROVIDED FILE IN /UTILS TO CREATE THE MARKDOWN FILE
const generateMarkdown = require('utils/generateMarkdown.js');


// PROMPT AND ARRAY OF QUESTIONS IN ORDER TO GENERATE THE ELEMENTS REQUIRED TO BUILD A README DOC
const promptUser = () => {

    const instructions = `\nWelcome to "A README.md Worth Reading."\n - You will be prompted to answer a series of questions, and our command line generator will take care of the rest!\n - Please answer all questions in plain text. Any required syntax or formatting will be auto-generated for you.\n - Questions marked with ** require a response; all others may be skipped by pressing "enter."\n - For listed responses, you may separate list items with the ^ symbol to generate a new line item in the bulleted list (ex. name1 - repo1 ^ name2 - repo2)\n\n`;

    console.log(instructions);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: '** What is the title of your project? (no formatting or special syntax required)',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: '** What is your GitHub username?',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: '** What is the name of your GitHub repository?',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'deployedURL',
            message: '** What is the URL for your deployed application?',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which type of license are you using?',
            choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla 2.0', 'Apache 2.0', 'Boost Software', 'The Unlicense', 'other/none']
        },
        {
            type: 'input',
            name: 'what',
            message: '** What was your motivation for creating this project/ application?',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'why',
            message: '** Why did you build it, and what problem does it solve?',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: '** What are the steps required to install your application?',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: '** How does your application work? Provide detailed steps outlining navigation and functionality.',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'includeImg',
            message: 'Please include the filepath or URL for any relevant images.'
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: '** Would you like to make your project open source for collaborators to contribute?',
            validate: function (value) {
                if (!value) {
                    console.log('Please provide your response!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'authors',
            message: 'Please list any developers with whom you collaborated on this project.'
        },
        {
            type: 'input',
            name: 'acknowledge',
            message: 'Please list relevant resources (YouTube, GitHub repositories, etc.) that assisted in the creation of this project.'
        },
    ]);
};


// WRITEFILE HAS BEEN IMPORTED FROM INQUIRER PROMISES
const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of a callback function
        .then((answers) => writeFile('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote README.md file!'))
        .catch((err) => console.error(err));
};


init();