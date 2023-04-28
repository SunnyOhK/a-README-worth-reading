// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// USE SWITCH STATEMENT TO FIND A MATCH FOR THE USER'S SELECTED BADGE - I ASKED CHAT GPT TO GIVE ME A DEFINITION: "The switch statement is often used as a more concise alternative to a long chain of if-else statements, especially when you need to compare the value of a single variable against multiple possible values."
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
// https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
// '', '', '', '', '', '', '', '', 'other/none'
function renderBadge(license) {
  let badge;

  switch (license) {
    case 'MIT':
      badge = { name: 'MIT', color: 'yellow' };
      break;
    case 'Apache 2.0':
      badge = { name: 'Apache_2.0', color: 'blue' };
      break;
    case 'GNU GPLv3':
      badge = { name: 'GPL_v3', color: 'blue' };
      break;
    case 'GNU AGPLv3':
      badge = { name: 'AGPL_v3', color: 'red' };
      break;
    case 'GNU LGPLv3':
      badge = { name: 'LGPL_v3', color: 'blue' };
      break;
    case 'Mozilla 2.0':
      badge = { name: 'MPL_2.0', color: 'brightgreen' };
      break;
    case 'The Unlicense':
      badge = { name: 'Unlicense', color: 'blue' };
      break;
    case 'Boost Software':
      badge = { name: 'Boost_1.0', color: 'lightblue' };
      break;

// DEFAULT NULL LICENSE VALUE
    default:
      return '';
  }

  return `\n\nhttps://img.shields.io/badge/license-${badge.name}-${badge.color}`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Using open source licenses from https://choosealicense.com/
function renderLink(license) {
  let key;

  switch (license) {
    case 'MIT':
      key = 'mit';
      break;
    case 'Apache 2.0':
      key = 'apache-2.0';
      break;
    case 'GNU GPLv3':
      key = 'gpl-3.0';
      break;
    case 'GNU AGPLv3':
      key = 'agpl-3.0';
      break;
    case 'GNU LGPLv3':
      key = 'lgpl-3.0';
      break;
    case 'Mozilla 2.0':
      key = 'mpl-2.0';
      break;
    case 'The Unlicense':
      key = 'unlicense';
      break;
    case 'Boost Software':
      key = 'bsl-1.0';
      break;

    default:
      return '';
  }

  return `https://choosealicense.com/licenses/${key}`
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseMD(license) {
  if (license == "other/none"){
    return ""
  }

  return `\n\n##License${renderBadge(license)} \n${renderLink(license)}\nThis project is licensed under: ${ license }`
}

function renderLicenseTOC(license){
  if (license == "other/none") {
    return ""
  }

  return `\n - [License](#license)`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var install = data.install.replace(/^/gi, '\n-');
  var usage = data.usage.replace(/^/gi, '\n-');
  var authors = data.authors.replace(/^/gi, '\n-');
  var acknowledge = data.acknowledge.replace(/^/gi, '\n-');

  var authorsSection = '';
    if (authors) {
      authorsSection = `\n\n##Authors \n\n${authors}`;
    }

  var acknowledgeSection = '';
    if (acknowledge) {
      acknowledgeSection = `\n\n##Acknowledgments \n\n${acknowledge}`;
    }

return `
# ${data.title}${renderBadge(data.license)}

## Description

${data.description} \n
${data.what} \n
${data.why} \n

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)${ renderLicenseTOB(data.license) }
- [Contact](#contact)


## Installation

You can visit the ${data.title} live web application at: ${data.deployedURL}

${install}


## Usage

${usage}
${data.includeImg}


## Contact

For questions or learn how you may contribute to this project, please contact me:
${data.name}
Project Link: https://github.com/${data.username}/${data.repo}
`
}

module.exports = generateMarkdown;
