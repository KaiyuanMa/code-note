const conn = require("./conn");
const Sequelize = require("sequelize");

const Note = conn.define("card", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Note;
