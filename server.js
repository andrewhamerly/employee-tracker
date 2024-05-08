const express = require('express');
const inquirer = require('inquirer');
const path = require('path');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'password',
      host: 'localhost',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  )
  
pool.connect();

const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        default: 'Add Employee',
    },
]

// Create an Employee
app.post('/api/:employee_id', ({ body }, res) => {
    const sql = `INSERT INTO employees (employee_name)
      VALUES ($1)`;
    const params = [body.employee_name];
  
    pool.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

// ADD REMAINING GET FUNCTIONS BELOW



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

console.log('----------Employee Tracker----------') // Added for CLI styling during prompts
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Error with current environment'); // Prompt couldn't be rendered in the current environment
        } else {
            console.log(error);
            console.log('Something went wrong.'); // Something else went wrong
        }
    });
}

// Function call to intialize app
init();