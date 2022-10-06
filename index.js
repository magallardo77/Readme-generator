// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
    name: "username",
    message:"What is your GitHub Username?",
    },
    {
    name: "email",
    message:"What is your email address?",
    },
    {
    name: "project",
    message:"What is your projects name?",
    },
    {
    name: "description",
    message:"Please write a short description of your project?",
    },
    {
    type: "list",
    name: "license",
    message:"What kind of license would you like?",
    choices: ["Apache", "MIT", "Mozilla", "none"] 
    },
    {
    name: "dependencies",
    message:"Are there any installation dependecies",
    default: "N/A"
    },
    {
    name: "tests",
    message:"What command should be run to run tests",
    },
    {
    name: "info",
    message:"What does the user need to know about using the repo?",
    },
    {
    name: "contributing",
    message:"What does the user need to know about contributing to the repo?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) => err ? console.log(err) : console.log("success"))
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) =>  {
        let genMarkdown = generateMarkdown(answers); 
        writeToFile("README.md", genMarkdown)
        }
        )
        .catch((err) =>  err ? console.log("Error") : console.log("Thanks"));
}

// Function call to initialize app
init();
