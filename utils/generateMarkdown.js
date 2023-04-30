// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// USE SWITCH STATEMENT TO FIND A MATCH FOR THE USER'S SELECTED BADGE - I ASKED CHAT GPT TO GIVE ME A DEFINITION: "The switch statement is often used as a more concise alternative to a long chain of if-else statements, especially when you need to compare the value of a single variable against multiple possible values."
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
// https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
// '', '', '', '', '', '', '', '', 'other/none'
function renderLicenses(license) {
  let badge;
  let section;

  switch (license) {
    case 'MIT':
      badge = '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit)';
      section = '## License\nThis project is licensed under: [MIT](https://choosealicense.com/licenses/mit/)';
      break;
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0)';
      section = '## License\nThis project is licensed under: [Apache 2.0](https://choosealicense.com/licenses/apache-2.0)'
      break;
    case 'GNU GPLv3':
      badge = '[![License](https://img.shields.io/badge/License-GPL_v3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0)';
      section = '## License\nThis project is licensed under: [GPL v3](https://choosealicense.com/licenses/gpl-3.0)'
      break;
    case 'GNU AGPLv3':
      badge = '[![License](https://img.shields.io/badge/License-AGPL_v3-red.svg)](https://choosealicense.com/licenses/agpl-3.0)';
      section = '## License\nThis project is licensed under: [AGPL v3](https://choosealicense.com/licenses/agpl-3.0)'
      break;
    case 'GNU LGPLv3':
      badge = '[![License](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://choosealicense.com/licenses/lgpl-3.0)';
      section = '## License\nThis project is licensed under: [LGPL v3](https://choosealicense.com/licenses/lgpl-3.0)'
      break;
    case 'Mozilla 2.0':
      badge = '[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://choosealicense.com/licenses/mpl-2.0)';
      section = '## License\nThis project is licensed under: [MPL 2.0](https://choosealicense.com/licenses/mpl-2.0)'
      break;
    case 'The Unlicense':
      badge = '[![License](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense)';
      section = '## License\nThis project is licensed under: [Unlicense](https://choosealicense.com/licenses/unlicense)';

      break;
    case 'Boost Software':
      badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://choosealicense.com/licenses/bsl-1.0)';
      section = '## License\nThis project is licensed under: [Boost Software](https://choosealicense.com/licenses/bsl-1.0/)';

      break;
    default:
      badge = '',
      section = '',
      toC = ''
  }
  return {
    badge: badge,
    section: section,
    toC: '- [License](#license)'
  }
}


function loadImg(img) {
  if (img) {
    return '![Image]'
  } else {
    return ''
  }
}

function generateContr(contributing) {
  var ACC = '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)';

  if (contributing.toUpperCase() === 'ACC') {
    return ACC;
  } else {
    return 'contributing';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenses = renderLicenses(data.license);
  var badges = licenses.badge;
  var licenseSection = licenses.section;
  var tableCont = licenses.toC;
  var install = data.install.replace(/~~/g, '\n- ');
  var usage = data.usage.replace(/~~/g, '\n- ');
  var credits = data.credits.replace(/~~/g, '\n- ');
  var tests = data.tests.replace(/~~/g, '\n- ');
  var imgTag = loadImg(data.img);
  var contributing = generateContr(data.contributing);

  return `# ${data.title}

${badges}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Contact](#contact)
${tableCont}

## Installation

You can visit the ${data.title} live web application at: ${data.deployedURL}

${install}

## Usage

${usage}
${imgTag}${data.img}


## Contributing

${contributing}

## Tests

${tests}

## Credits

${credits}

## Questions

For questions, please contact me:\n
### GitHub: &nbsp;<small>[${data.name}](https://github.com/${data.name})</small>\n
### Project Link: &nbsp;<small>https://github.com/${data.name}/${data.repo}</small>
### Email: &nbsp;<small>${data.email}</small>

${licenseSection}
`
}

module.exports = generateMarkdown;
