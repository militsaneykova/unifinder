require('isomorphic-fetch');
require('dotenv').config();

function getWeather(req, res, next) {
  fetch(` http://universities.hipolabs.com/search?name=${}&country=${}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      res.locals.city = jsonRes.main;
      res.locals.country = jsonRes.main;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
}

module.exports = {
  getWeather,
}