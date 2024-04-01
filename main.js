#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = true;
console.log("\n \t Welcome To Rubab bukhari Todo-List Application \n");
while (condition) {
    var addtask = await inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: "what do you want to add in todos?",
        }
    ]);
    todos.push(addtask.task);
    console.log("".concat(addtask.task, " task added in todo-list successfully"));
    var addmoretask = await inquirer_1.default.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more?",
            default: "false",
        },
    ]);
    condition = addmoretask.addmore;
}
console.log("your updated todo- list: ".concat(todos));
