# Employee Tracker
  Organizing, recognizing, and appreciating employees is foundational to good business.<br /><br />A database that helps keep track of relationships between employees and managers is helpful for management.<br /><br />Enter the Employee Tracker, a simple node.js app that connects with a Postgres database to help retain employee information.
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  ## Installation
  Steps to kickstart the project:<br />1. **Copy Link**: Hit the "Code" button in this GitHub repo to copy the link.<br />2. **Clone**: In GitBash, execute the command `git clone [paste link here]`.<br />3. **NPM**: Install Node Package Manager with `npm init -y`.<br />4. **Inquirer**: Get npm's inquirer package by running `npm install inquirer`.<br />5. **PG**: Get npm's pg package by running `npm install pg`.<br />6. **PostgreSQL**: Setup PostgreSQL database by running `psql -U postgres` followed by entering your user database password and then creating the database by running `\i db/schema.sql`.<br />7. **Seeding**: Optionally, you can seed the database with info by running `\i db/seeds.sql`.
  ## Usage
  Once the software is downloaded, Node packages are initialized, and your PostgreSQL database is active, let's begin!<br /><br />Navigate to the project directory and initiate prompts using `node server.js`.<br /><br />Then, select your desired action and the employee database will be updated.<br />
  [Link to video demo of Employee Tracker](https://drive.google.com/file/d/1T2dpu6FkggHc-qDtRBw6Dt7xL6X0pqvk/view?usp=drive_link)
  ## License
  ![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)<br />
  [License Guide](https://opensource.org/licenses/MIT)<br />
  This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
  ## Contributing
  Please enter a new issue in the GitHub repo. Thanks!
  ## Tests
  There are no tests for this app.
  ## Questions
  [GitHub Profile](https://github.com/andrewhamerly)<br />
  If you have additional questions, please email me at ah@andrewhamerly.com.
  ## Credits
  My tutor for help with the DB class with constructor and async query.