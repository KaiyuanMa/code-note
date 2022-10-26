const { Card } = require("../index");

const createAndSeedCard = async (users) => {
  try {
    const _CARD = [
      {
        name: "HashMap",
        videoLink: "https://www.youtube.com/watch?v=70qy6_gw1Hc",
        userId: users[0].id,
      },
      {
        name: "LinkedList",
        videoLink: "https://www.youtube.com/watch?v=WwfhLC16bis",
        userId: users[0].id,
      },
    ];
    const cards = await Promise.all(_CARD.map((card) => Card.create(card)));
    return cards;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = createAndSeedCard;
