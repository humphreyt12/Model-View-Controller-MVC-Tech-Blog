const Sequelize = require('sequelize');
require('dotenv').config(); // Enable access to .env variables

let sequelize;

//Enable access to Heroku's process.env.JAWSDB_URL 
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize( // Use environment variables to connect to database
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
}
module.exports = sequelize;
