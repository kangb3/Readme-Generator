var inquirer = require("inquirer");
var fs = require("fs");

inquirer .prompt([
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
        type: "input",
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        type: "input",
        message: "What command should be used to install dependencies?",
        name: "command"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usageRepo"
    },
    {
        type: "input",
        message: "What does the user need to know about contrubuting to the repo?",
        name: "constributeRepo"
    }
]);