const express = require("express");
const router = express.Router();
const { Folder, Card } = require("../db");
const { isLoggedIn, haveAccess } = require("./middleware");

//GET
router.get("/", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    res.send(await Folder.findAll({ where: { userId: req.user.id } }));
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.get("/:folderId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    const folder = await Folder.findByPk(req.params.folderId);
    await folder.destroy();
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
router.put("/:folderId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    res.send(
      await Folder.update(req.body, {
        where: { id: req.params.folderId },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
