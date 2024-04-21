#! /usr/bin/env node
import inquirer from 'inquirer';

let todos: string[] = [];
let condition = true;

while(condition){
let addtask = await inquirer.prompt(
    [
        {
            name: 'todo',
            type: 'input',
            message: 'what you want to add in todo?',
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: 'do you want addmore todo',
            default: 'false',
        },
    ]
);
todos.push(addtask.todo)
condition = addtask.addmore;
console.log(todos)
}