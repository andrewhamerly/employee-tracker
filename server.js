const { prompt } = require('inquirer');
const path = require('path');
const db = require('./db');
const { debug } = require('console');

console.log('----------Employee Tracker----------') // Added for CLI styling during prompts
function init() {
    prompt([
// const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: [
            {
                name:'View All Employee',
                value: 'VIEW_ALL_EMPLOYEE',
            },
            {
                name:'Add Employee',
                value: 'ADD_EMPLOYEE',
            },
            {   name: 'Update Employee Role',
                value: 'UPDATE_EMPLOYEE_ROLE',
            },
            {
                name: 'View All Roles',
                value: 'VIEW_ALL_ROLES',
            },  
            {
                name: 'Add Role',
                value: 'ADD_ROLE',
            },  
            {
                name: 'View All Departments',
                value: 'VIEW_ALL_DEPARTMENTS',
            },   
            {
                name: 'Add Department',
                value: 'ADD_DEPARTMENT',
            }, 
            {
                name: 'Quit',
                value: 'QUIT',
            }, 
        ],
    },
]).then((answers)=>{
    let option = answers.options;
    switch (option) {
        case 'VIEW_ALL_EMPLOYEE':
            viewAllEmployee();
            break;
        case 'ADD_EMPLOYEE':
            addEmployee();
            break;
        case 'UPDATE_EMPLOYEE_ROLE':
            updateEmployee();
            break;
        case 'VIEW_ALL_ROLES':
            viewRoles();
            break;
        case 'ADD_ROLE':
            addRole();
            break;
        case 'VIEW_ALL_DEPARTMENTS':
            viewDepartments();
            break;
        case 'ADD_DEPARTMENT':
            addDepartment();
            break;
        default:
            quit();
    }
});
};

function viewAllEmployee() {
    db.findAllEmployees()
    .then(({rows}) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => init())
}

// Function call to intialize app
init();