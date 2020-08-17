function generateMarkdown(data){
    return `
# ${data.projectName}

![License: None](https://img.shields.io/badge/License-${data.license}-brightgreen)

## Description


${data.description}

## Table of contents

* [Installation](#Installation)
* [Usage](#Usage)  
* [License](#License)  
* [Contributing](#Contributing)  
* [Tests](#Tests)  
* [Questions](#Questions)  
  
## Installation

To install necessary dependencies, run the following command:

    ${data.commandDependencies}

## Usage 

${data.usageRepo}


## License

This project is licensed under the ${data.license}

## Contributing

${data.contributeRepo}

## Tests


To run tests run the following command:

    ${data.commandTest}

## Questions 


If you have any questions about the repo, open an issue or contact me directly at ${data.userEmail}. You can find more of my work at https://github.com/${data.githubUsername}.
`
}

module.exports = generateMarkdown;