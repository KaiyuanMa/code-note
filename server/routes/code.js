const express = require("express");
const router = express.Router();
const { Code } = require("../db");
const { isLoggedIn, haveAccess } = require("./middleware");

//GET
router.get("/:codeId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    res.send(await Code.findByPk(req.params.codeId));
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:codeId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    const code = await Code.findByPk(req.params.codeId);
    await code.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/:cardId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    await Code.create(req.body);
    res.sendStatus(201);
  } catch (ex) {
    next(ex);
  }
});

//PUT
router.put("/:codeId", isLoggedIn, haveAccess, async (req, res, next) => {
  try {
    res.send(
      await Code.update(req.body, {
        where: { id: req.params.codeId },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
