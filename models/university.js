
const db = require('../db/config');
const University = {};

// if the university matches one of the db , use it if not make api call and store it into the db
University.insert = (name, country, webPage, userID) => {
    return db.none(`INSERT INTO universities(name, country, webpage_url, user_id)`
        + `VALUES($1, $2, $3, $4)`, [name, country, webPage, userID]);
};

University.get = userID => {
    return db.any(`SELECT * FROM universities WHERE user_id = $1`, userID);
}

module.exports = University;