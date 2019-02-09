const Sequelize = require('sequelize');
const UserModel = require('./models/users');

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);
console.log('Try to connct...');
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = UserModel(sequelize, Sequelize);

  sequelize.sync({force: true})
  .then(() =>{
    console.log('Database and tables created');
  });

module.exports = 
{
  user: User
};