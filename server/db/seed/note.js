const { Note } = require("../index");

const createAndSeedNote = async (cards) => {
  try {
    const _NOTE = [
      { text: "a note for hashMap", cardId: cards[0].id },
      { text: "a note for LinkedList", cardId: cards[1].id },
    ];
    const note = await Promise.all(_NOTE.map((note) => Note.create(note)));
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = createAndSeedNote;
