const conn = require("./conn");
const User = require("./User");
const Card = require("./Card");
const Code = require("./Code");
const Note = require("./Note");

User.hasMany(Card);
Card.hasMany(Code);
Card.hasOne(Note);

module.exports = {
  conn,
  User,
  Card,
  Code,
  Note,
};
