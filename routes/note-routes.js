const db = require('../db/config');

const Todo = {};

Todo.findAll = (id) => {
  return db.query(`
    SELECT * FROM notes
    WHERE user_id = $1
  `, [id]);
};

Todo.create = (note) => {
  return db.one(`
    INSERT INTO notes
    ( description, user_id)
    VALUES ($1, $2)
    RETURNING *
  `, [ note.description, note.user_id]);
};

Todo.findById = (id) => {
  return db.oneOrNone(`
  SELECT * FROM notes
  WHERE id = $1
  `, [id]);
};

Note.update = (note, id) => {
  return db.one(`
    UPDATE notes SET
    user_id = $1
    WHERE id = $2
    RETURNING *
  `, [ notes.description, notes.user_id, id]);
};

Note.destroy = (id) => {
  return db.none(`
    DELETE FROM notes
    WHERE id = $1
  `, [id])
}

Note.complete = (id) => {
  return db.oneOrNone(`
  UPDATE notes SET
  completed = true
  WHERE id = $1
  `, [id]);
}

module.exports = Note;