#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.blue(" \n \t\t >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
console.log(chalk.magenta.bold.italic("\n \t\t=========== Welcome To My Todos List ========== \n"));
console.log(chalk.blue(" \t\t >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.cyan.bold.italic("Select an option you want to do"),
                choices: ["Add Task", "Delete Task", "update Task", "View Too-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTAsk();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "update Task") {
            await updateTask();
        }
        else if (option.choice === "View Too-List") {
            await viewList();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
//function to add new task to the list
let addTAsk = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.magentaBright.bold.italic("Enter  your ne task :")
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.yellow.bold(`\n ${newTask.task} task addded successfully in Todo-List`));
};
//function to view all Todo-List task
let viewList = () => {
    console.log(chalk.yellow.bold("\n Your Todo-List:\n"));
    todoList.forEach((task, index) => {
        console.log(chalk.magenta.bold.italic(`${index + 1}: ${task}`));
    });
};
// function to delete a task from the list
let deleteTask = async () => {
    await viewList();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.red.bold.italic("Enter the 'index no.'of the task you want to delete :")
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.yellow.bold.italic(`\n ${deletedTask} this task has been deleted successfully from your Todo-LIst \n `));
};
// function to Update a task
let updateTask = async () => {
    await viewList();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.cyan.bold.italic("Enter the 'index no.'of the task you want to update :")
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.cyan.bold.italic("Now enter new task :")
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(chalk.yellow.bold.italic(`\n Task at index no. ${update_task_index.index - 1} updated successfully "for update list check option: view Todo_List"`));
};
main();
