const Sequelize = require("sequelize");

const connection = new Sequelize("db_desafio_softcom_react", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
