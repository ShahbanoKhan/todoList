#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'What do you want to add in your to-do list'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Do you want to add more?',
            default: 'true'
        },
    ]);
    todo.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todo);
}
;
let options = await inquirer.prompt({
    name: 'option',
    type: 'list',
    choices: ['New Task', 'Task Completed']
});
if (options.option === 'New Task') {
    console.log(todo);
}
else {
    let completedOpt = await inquirer.prompt([
        {
            name: 'done',
            type: 'checkbox',
            choices: todo.map(task => ({ name: task }))
        }
    ]);
}
;
