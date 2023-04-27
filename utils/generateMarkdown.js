// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// USE SWITCH STATEMENT TO FIND A MATCH FOR THE USER'S SELECTED BADGE - I ASKED CHAT GPT TO GIVE ME A DEFINITION: "The switch statement is often used as a more concise alternative to a long chain of if-else statements, especially when you need to compare the value of a single variable against multiple possible values."

function renderLicenseBadge(license) {
  let badge;

  switch (license) {
    case 'MIT':
      badge = { name: '', color: ''};
      break;
    case 'Apache':
      badge = { name: '', color: ''};
      break;
    case 'GPLv2':
      badge = { name: '', color: ''};
      break;
    case 'GPLv3':
      badge = { name: '', color: ''};
      break;
    case 'LGPLv3':
      badge = { name: '', color: ''};
      break;
    case 'AGPLv3':
      badge = { name: '', color: ''};
      break;
    case 'Mozilla':
      badge = { name: '', color: ''};
      break;
    case 'Unlicense':
      badge = { name: '', color: ''};
      break;
    case 'Eclipse':
      badge = { name: '', color: ''};
      break;
    case 'IBM':
      badge = { name: '', color: ''};
      break;
    case 'ISC':
      badge = { name: '', color: ''};
      break;
// DEFAULT NULL LICENSE VALUE
    default: 'other/none'
      break;
  }
}

return ``

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}


const generateMarkdown = ({ title, username, deployedURL, license, what, why, installation, usage, includeImg, contributing, authors, acknowledgment })


module.exports = generateMarkdown;
