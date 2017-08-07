const Note = require('../models/note');

const notesController = {};

notesController.index = (req, res) => {
  Note.findAll()
    .then(notes => {
      // res.send('iyuyuyyyu');
      res.render('notes/notes-index', {
        data: notes,
        currentPage: 'index',
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
        data: note,
        currentPage: 'show',
        message: 'ok',
        university_id: req.params.id
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

notesController.newNote = (req, res) => {
  res.render('notes/notes-add', {
    university_id: req.params.id
  });
}

notesController.create = (req, res) => {

  Note.create({
    description: req.body.description, 
    user_id: req.user.id,
    universities_id: req.params.id
  }).then(note => {
    console.log(note);
    res.redirect('/notes/' + req.params.id);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};


notesController.edit = (req, res) => {
  Note.findNoteToEdit(req.params.id)
    .then(note => {
      console.log(note);
      res.render('notes/notes-edit', {
          currentPage: 'edit',
          data: note,
          user_id: req.user.id,
          university_id: note[0].universities_id
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

notesController.update = (req, res) => {
  Note.update({
    description: req.body.description,
    user_id: req.user.id,
     universities_id: req.params.id,
  }, req.params.id).then(note => {
    res.redirect(`/notes/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

notesController.delete = (req, res) => {
  Note.destroy(req.params.id)
    .then(() => {
      res.redirect('/notes/');
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