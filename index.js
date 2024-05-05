#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "1.What is TypeScript?",
        choices: ["A JavaScript framework", "A superset of JavaScript", "A database management system", "A markup language"]
    },
    {
        name: "question_2",
        type: "list",
        message: "2.Which keyword is used to declare a variable in TypeScript that cannot be reassigned a new value?",
        choices: ["let", "var", "const", "static"]
    },
    {
        name: "question_3",
        type: "list",
        message: "3.Which command is used to install TypeScript globally via npm?",
        choices: ["npm install -g typescript", "npm install typescript", "npm install -global typescript", "npm install -save typescript"]
    },
    {
        name: "question_4",
        type: "list",
        message: "4.How do you declare a variable in TypeScript?",
        choices: ["var x;", "let x;", "const x;", "All of the above"]
    },
    {
        name: "question_5",
        type: "list",
        message: "5.What is the correct syntax for defining a function in TypeScript?",
        choices: ["function myFunction(): void {}", "function myFunction {}", "void myFunction() {}", "myFunction(): void {}"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "A superset of JavaScript":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.question_2) {
    case "const":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question_3) {
    case "npm install -g typescript":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question_4) {
    case "All of the above":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question_5) {
    case "function myFunction(): void {}":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score: ${score}`);
