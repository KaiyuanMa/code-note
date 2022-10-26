const conn = require("./conn");
const User = require("./User");
const Folder = require("./Folder");
const Card = require("./Card");
const Code = require("./Code");
const Note = require("./Note");

User.hasMany(Folder);
User.hasMany(Card);
Folder.hasMany(Card);
Card.hasMany(Code);
Card.hasOne(Note);

module.exports = {
  conn,
  User,
  Card,
  Code,
  Note,
  Folder,
};
