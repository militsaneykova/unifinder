const db = require('../db/config');

const Note = {};


Note.findAll = (id) => {
  return db.query(`
    SELECT universities.name, universities.country, universities.webpage_url , notes.description 
    FROM universities JOIN notes ON universities.id = notes.universities_id
    WHERE user_id = $1
  `, [id]);
};

Note.create = (note) => {
  return db.one(`
    INSERT INTO notes
    ( description, user_id)
    VALUES ($1, $2)
    RETURNING *
  `, [ note.description, note.user_id]);
};

Note.findById = (id) => {
  return db.oneOrNone(`
  SELECT universities.name, universities.country, universities.webpage_url , notes.description 
  FROM universities JOIN notes ON universities.id = notes.universities_id
  WHERE user_id = $1
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


module.exports = Note;