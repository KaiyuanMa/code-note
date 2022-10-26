const conn = require("./conn");
const Sequelize = require("sequelize");

const Folder = conn.define("folder", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Folder;
