const { Pool } = require('pg');

const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'password',
      host: 'localhost',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  )
  
pool.connect();

module.exports = pool