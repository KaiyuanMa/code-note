const conn = require("./conn");
const Sequelize = require("sequelize");

const Code = conn.define("card", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Code;
