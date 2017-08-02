const Note = require('../models/note');

const notesController = {};

notesController.index = (req, res) => {
  Note.findAll(req.user.id)
    .then(notes => {
      res.render('notes/notes-index', {
        data: notes,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

notesController.show = (req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      res.render('notes/notes-single', {
        note: note,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

notesController.create = (req, res) => {
  Note.create({
    description: req.body.description,
    user_id: req.user.id,
  }).then(note => {
    console.log(note);
    res.redirect('/notes');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

notesController.edit = (req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      res.render('notes/notes-edit', {
        note: note,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

notesController.update = (req, res) => {
  Note.update({
    description: req.body.description,
    user_id: req.user.id,
  }, req.params.id).then(note => {
    res.redirect('/notes');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

notesController.delete = (req, res) => {
  Note.destroy(req.params.id)
    .then(() => {
      res.redirect('/notes');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

notesController.complete = (req, res) => {
  Note.complete(req.params.id)
    .then(note => {
      res.json({
        message: 'note completed successfully',
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

module.exports = notesController;