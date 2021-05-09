const Sequelize = require("sequelize");
const connection = require("../config/database");

const Product = connection.define("tbl_products", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  desconto: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  img_nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_key: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_url: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Product;
