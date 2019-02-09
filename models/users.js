module.exports = (sequelize, type) => {
  return sequelize.define('user', {
    firstName: {
      type: type.STRING
    },
    lastName: {
      type: type.STRING
    }
  })
}