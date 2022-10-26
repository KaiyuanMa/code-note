const { User } = require("../index");

const _USER = [
  {
    username: "foo",
    password: "foo",
    email: "foo@gmail.com",
  },
];

const seedUser = async () => {
  try {
    const users = await Promise.all(_USER.map((user) => User.create(user)));
    return users;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedUser;
