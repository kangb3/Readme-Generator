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

## Usage 

${data.usageRepo}

## License

This project is licensed under the ${data.license}

## Contributing

${data.contributeRepo}

## Tests
To run tests run the following command:

    ${data.license}

## Questions 

If you have any questions about the repo, open an issue or contact me directly at ${data.useremail}. You can find more of my work at https://github.com/${data.githubUsername}.
`
}

module.exports = generateMarkdown;