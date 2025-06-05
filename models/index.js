const sequelize = require('../config/db.config');
const User = require('./user.model');

// Sync models with the database  comment this once the database is set up this line is used to create the tables
// This should be run only once to create the tables, after that comment it out
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

module.exports = { User };
