const express = require("express");
const router = express.Router();
const { Card } = require("../db");
const { isLoggedIn, haveAccess } = require("./middleware");

//GET
router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await Card.findAll({ where: { userId: req.user.id } }));
  } catch (ex) {
    next(ex);
  }
});

router.get("/:cardId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    res.send(await Card.findByPk(req.params.cardId));
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:cardId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    const card = await Card.findByPk(req.params.cardId);
    await card.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    if (req.body.userId !== req.user.id) throw "No Access";
    await Card.create(req.body);
    res.sendStatus(201);
  } catch (ex) {
    next(ex);
  }
});

//PUT
router.put("/:cardId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    res.send(
      await Card.update(req.body, {
        where: { id: req.params.cardId },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
