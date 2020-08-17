var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown.js")
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer .prompt([
        {
            type: "input",
            message: "What is your Github username?",
            name: "githubUsername"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "userEmail"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Please write a short description of your project",
            name: "description"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            message: "What command should be used to install dependencies?",
            name: "commandDependencies"
        },
        {
            type: "input",
            message: "What command should be run to install tests?",
            name: "commandTest"
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "usageRepo"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contributeRepo"
        }
    ]);
}

promptUser()
    .then(function(data){
        const readMe = generateMarkdown(data);

        return writeFileAsync("gg.md", readMe);
    })
    .then(function() {
        console.log("Successfully wrote to readme");
      })
      .catch(function(err) {
        console.log(err);
      });


