require('isomorphic-fetch');
require('dotenv').config();
// query string ,pass the date coming from the user input field 
function getCountry(req, res, next) {
  console.log('body', req.body, req)
  var id = req.query.id;
  var name = req.query.name;
  var country = req.query.country;
  console.log('coutnry', country, 'name', name)

  // console.log('REQUEST ID', id)
  // res.send(id)
  fetch(` http://universities.hipolabs.com/search?name=${name}&country=${country}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
    
//   console.log('json', jsonRes)
console.log(jsonRes[0].name);
      // res.params.city = jsonRes.main;
      // res.params.country = jsonRes.main;
    //   res.send(jsonRes[0].country)
      // return next();
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