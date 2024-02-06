const Sequelize = require('sequelize');
require('dotenv').config(); // Enable access to .env variables

// Use environment variables to connect to database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
    {
      // Database location
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    },
  );

module.exports = sequelize;
