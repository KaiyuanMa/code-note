const { conn } = require("../index");
const seedUser = require("./user");
const createAndSeedCard = require("./card");
const createAndSeedNote = require("./note");

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
    const users = await seedUser();
    const card = await createAndSeedCard(users);
    const note = await createAndSeedNote(card);
  } catch (ex) {
    console.log(ex);
  }
};

syncAndSeed();
