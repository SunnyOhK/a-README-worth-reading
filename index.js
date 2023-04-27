const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {

    const instructions = `Welcome to "A README.md Worth Reading." You will be prompted to answer a series of questions, and our command line generator will take care of the rest!`;

    console.log(instructions);
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (no formatting or special syntax required)'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the name of your GitHub repository?'
        },
        {
            type: 'input',
            name: 'deployedURL',
            message: 'What is URL for your deployed application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license are you using?',
            choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'BSD 3-clause', 'LGPLv3', 'AGPLv3', 'Unlicense', 'other']
        },
        {
            type: 'input',
            name: 'what',
            message: 'What was your motivation for creating this project/ application?'
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build it, and what problem does it solve?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your application?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does your application work? Provide detailed steps outlining navigation and functionality.'
        },
        {
            type: 'input',
            name: 'includeImg',
            message: 'Please include any relevant screenshots using the following syntax: ![alt text](folder/folder/image-title.png)  OR  <img src = folder/folder/image-title.png>'
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: 'Would you like to make your project open source for collaborators to contribute?'
        },
        {
            type: 'input',
            name: 'authors',
            message: 'Please list any developers with whom you collaborated on this project. You may list one at a time to generate a bulleted list as the next question will prompt you for additional authors.'
        },
        {
            type: 'confirm',
            name: 'addAuthors',
            message: 'Are there any other contributors you would like to mention? Please provide their names and a link to their GitHub Repository.'
        },
        {
            type: 'input',
            name: 'acknowledge',
            message: 'Please list any additional resources for which you would like to give credit. You may list one at a time to generate a bulleted list as the next question will prompt you for additional acknowledgements.'
        },
        {
            type: 'confirm',
            name: 'addAck',
            message: 'Are there any other resources you would like to mention?'
        }
    ]);
};


// Bonus using writeFileSync as a promise
const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => writeFile('test.txt', generateText(answers)))
        .then(() => console.log('Successfully wrote to txt file!'))
        .catch((err) => console.error(err));
};

init();