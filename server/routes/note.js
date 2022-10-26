const express = require("express");
const router = express.Router();
const { Note } = require("../db");
const { isLoggedIn, haveAccess } = require("./middleware");

//GET
router.get("/:noteId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    res.send(await Note.findByPk(req.params.noteId));
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:noteId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    const note = await Note.findByPk(req.params.noteId);
    await note.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/:cardId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    await Note.create(req.body);
    res.sendStatus(201);
  } catch (ex) {
    next(ex);
  }
});

//PUT
router.put("/:noteId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    res.send(
      await Note.update(req.body, {
        where: { id: req.params.noteId },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
