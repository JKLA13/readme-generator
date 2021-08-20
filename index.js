// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// inquirer.prompt(questions);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects name?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project use?",
    choices: ["MIT", "Apache", "GPLv2", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should we run for dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "contributor",
    message: "Who are the contributors on this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this generator?",
    default: "node index.js",
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if there is an issue?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  //presnt the user the questions
  inquirer.prompt(questions).then((data) => {
    writeToFile("./dist/README.md", generateMarkdown({ ...data }));
    console.log("Your README has been written!");
  });
}

// Function call to initialize app
init();

//inquier return will return a promise object
// inquirer.prompt(questions).then((data) => {
//   console.log(data);

// });
