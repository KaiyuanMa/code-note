const conn = require("./conn");
const Sequelize = require("sequelize");

const Card = conn.define("card", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  videoLink: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Card;
