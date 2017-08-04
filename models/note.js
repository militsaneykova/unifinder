const db = require('../db/config');

const Note = {};


Note.findAll = (id) => {
  // console.log('this is the id form the query' , id);
  return db.any(`
  SELECT * FROM notes
  WHERE id = $1
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
  return db.any(`
  SELECT universities.name, universities.country, universities.webpage_url, notes.description 
  FROM universities
  JOIN notes ON universities.id = notes.universities_id
  WHERE universities.id = $1 
  `, [id]);
};

//
Note.update = (note, id) => {
  return db.one(`
    UPDATE notes SET
    description =$1, 
    user_id = $2
    WHERE id = $3
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