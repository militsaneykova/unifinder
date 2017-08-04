const express = require('express');
const notesRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const notesController = require('../controllers/notes-controller');

notesRouter.get('/', authHelpers.loginRequired, notesController.index);
notesRouter.post('/', authHelpers.loginRequired, notesController.create);

notesRouter.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('notes/notes-add '),{
    currentPage: 'add',
  }
});

notesRouter.get('/:id', authHelpers.loginRequired, notesController.show);
notesRouter.get('/:id/edit', authHelpers.loginRequired, notesController.edit);
notesRouter.put('/:id', authHelpers.loginRequired, notesController.update);
notesRouter.put('/:id/complete', authHelpers.loginRequired, notesController.complete);
notesRouter.delete('/:id', authHelpers.loginRequired, notesController.delete);


module.exports = notesRouter;