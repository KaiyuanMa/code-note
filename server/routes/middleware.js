const { User, Card, Note, Code, Folder } = require("../db");

const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await User.findByToken(req.headers.authorization);
    next();
  } catch (ex) {
    next(ex);
  }
};

const haveAccess = async (req, res, next) => {
  try {
    if (req.params.folderId) {
      const folder = Folder.findByPk(req.params.folderId);
      if (folder.userId !== req.user.id) throw "No Access";
    }
    let card = {};
    if (req.params.codeId) {
      const code = await Card.findByPk(req.params.codeId);
      card = await Card.findByPk(code.cardId);
    }
    if (req.params.noteId) {
      const note = await Note.findByPk(req.params.noteId);
      card = await Card.findByPk(note.cardId);
    }
    if (req.params.cardId) {
      card = await Card.findByPk(req.params.cardId);
    }
    if (card.userId !== req.user.id) throw "No Access";
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  isLoggedIn,
  haveAccess,
};
