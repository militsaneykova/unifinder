require('isomorphic-fetch');
require('dotenv').config();

function getCountry(req, res, next) {
  var req = req.body.id
  fetch(` http://universities.hipolabs.com/search?name=${req}&country=${req}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      res.params.city = jsonRes.main;
      res.params.country = jsonRes.main;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
}
// make a post request in app.js make a function in the router
// and the conect the services 
module.exports = {
  getCountry,
}