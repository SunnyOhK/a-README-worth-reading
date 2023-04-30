const inquirer = require('inquirer');

// MINI PROJECT BONUS: promises module as an alternative to using callbacks with file system methods.
const fs = require('fs');
// const utils = require('utils');
const { writeFile } = fs.promises;


// USE THE PROVIDED FILE IN /UTILS TO CREATE THE MARKDOWN FILE
const generateMarkdown = require('./utils/generateMarkdown.js');


// PROMPT AND ARRAY OF QUESTIONS IN ORDER TO GENERATE THE ELEMENTS REQUIRED TO BUILD A README DOC
const promptUser = () => {

    const instructions = `\nWelcome to "A README.md Worth Reading."\n- You will be prompted to answer a series of questions, and our command line generator will take care of the rest!\n- If you would like to generate a bulleted list (accepting questions marked with ~ symbol), use the ~~ symbols before each list item (ex. Sentence. ~~First step in instructions. ~~Second step in instructions.)\n- If you would like to include an image, please enclose the url or filepath in () (ex. (www.photo.com)\n`;

    console.log(instructions);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project or application?',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please provide your GitHub username.',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
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
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'deployedURL',
            message: 'What is the URL for your deployed application?',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
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
            name: 'description',
            message: 'Provide a description of your project. What does it do, and why did you create it?',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: '~ What are the steps required to install your application?',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: '~ How does your application work? Provide detailed steps outlining navigation and functionality.',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'img',
            message: 'Please include the relative filepath or URL for an image. (optional)',
        },
        {
            type: 'input',
            name: 'credits',
            message: '~ Please list any collaborating authors or relevant resources contributed to the development of this project.',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: '~ Please outline your contribution guidelines, OR to adopt Contributor Covenant, please simply write ACC .',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: '~ Please outline test instructions.',
            validate: function (value) {
                if (!value) {
                    console.log('Response required.');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    
};


// WRITEFILE HAS BEEN IMPORTED FROM INQUIRER PROMISES
const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of a callback function
        .then((data) => writeFile('README.md', generateMarkdown(data)))
        .then(() => console.log('README.md file generation successful!'))
        .catch((err) => console.error(err));
};


init();