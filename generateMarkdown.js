function generateMarkdown(data){
    return `
# ${data.projectName}

## Description
${data.description}

## License
This project is licensed under the ${data.license} license.

## Installation
To install necessary dependencies, run the following command:

    ${data.commandDependencies}
    

## Tests
To run tests run the following command:

    ${data.license.choices}
    `
}

module.exports = generateMarkdown;