#! /usr/bin/env node
import inquirer from "inquirer";



let todos:string[]= [];
let condition = true;

console.log("\n \t Welcome To Rubab bukhari Todo-List Application \n")


while (condition) {
  let addtask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "what do you want to add in todos?",
    }]);

    todos.push(addtask.task);

    console.log(`${addtask.task} task added in todo-list successfully`);


    let addmoretask =await inquirer.prompt([

    {
      name: "addmore",
      type: "confirm",
      message: "do you want to add more?",
      default: "false",
    },
  ]);

  condition = addmoretask.addmore;
  
}
console.log(`your updated todo- list: ${todos}`)

