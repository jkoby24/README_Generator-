const inquirer = require('inquirer');
const LicenseWebpackPlugin = require('license-webpack-plugin')
  .LicenseWebpackPlugin;

const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser() {
  // array of questions for user
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },

    {
      type: 'input',
      message: 'Enter a description of your project',
      name: 'description',
    },

    {
      type: 'input',
      message: 'Enter installation instructions',
      name: 'installation',
    },

    {
      type: 'input',
      message: 'Enter how to use application',
      name: 'usage',
    },

    {
      type: 'list',
      message: 'Choose an open source license',
      name: 'license',
      choices: [
        { value: 'apagpl-3.0' },
        { value: 'mit' },
        { value: 'gpl-3.0' },
        { value: 'isc' },
      ],
    },

    {
      type: 'input',
      message: 'Provide contribution guidelines',
      name: 'contribution',
    },

    {
      type: 'input',
      message: 'Enter test details',
      name: 'test',
    },

    {
      type: 'input',
      message: 'Enter your github username',
      name: 'questions',
    },

    {
      type: 'input',
      message: 'Enter your email address',
      name: 'email',
    },
  ]);
}

// function to write README file
function generateREADME(answers) {
  return `# ${answers.title}
![license shield](https://img.shields.io/badge/License-${answers.license}-blueviolet.svg)
## Description
${answers.description}
## Table of Contents (Optional)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
## Contributing 
${answers.contribution}
## Tests
${answers.test}
## Questions
* Github:[${answers.questions}](http://github.com/${answers.questions} "Visit me on GitHub")
* Email: ${answers.email} - Feel free to reach out if you have any questions.
`;
}
// function call to initialize program
promptUser()
  .then(function (answers) {
    const readMe = generateREADME(answers);
    return writeFileAsync('README.md', readMe);
  })
  .then(function () {
    console.log('Successfully wrote to README.md');
  })
  .catch(function (err) {
    console.log(err);
  });
