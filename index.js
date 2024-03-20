#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { name: "number1", type: "number", message: "Enter Your First Number" },
    {
        name: "number2",
        type: "number",
        message: "Enter Your Second Number",
    },
    {
        name: "operators",
        type: "list",
        message: "Select Your Operators ",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Exponentaion",
            "Modulus",
        ],
    },
]);
if (answer.operators === "Addition") {
    console.log(chalk.green(answer.number1 + answer.number2));
}
else if (answer.operators === "Subtraction") {
    console.log(chalk.green(answer.number1 - answer.number2));
}
else if (answer.operators === "Multiplication") {
    console.log(chalk.green(answer.number1 * answer.number2));
}
else if (answer.operators === "Division") {
    console.log(chalk.green(answer.number1 / answer.number2));
}
else if (answer.operators === "Exponentaion") {
    console.log(chalk.green(answer.number1 ** answer.number2));
}
else if (answer.operators === "Modulus") {
    console.log(chalk.green(answer.number1 % answer.number2));
}
else {
    console.log(chalk.red("Plz type write code"));
}
