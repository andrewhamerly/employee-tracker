const { Pool } = require('pg');

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

module.exports = pool