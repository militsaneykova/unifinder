require('isomorphic-fetch');
require('dotenv').config();

// REQUIRE YOUR MODEL
// YOU SHOULD HAVE QUERIES TO INSERT INFORMATION FROM API INTO THE DATABASE

const University = require('../../models/university'); 

// query string ,pass the date coming from the user input field 
function getCountry(req, res, next) {

    // CAPTURING THE FORM INPUT AND STORING INTO THESE VARIABLES
  var name = req.body.university;
  var country = req.body.country;

  fetch(` http://universities.hipolabs.com/search?name=${name}&country=${country}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {

        // GRAB INFORMATION FROM THE API RESPONSE - object with an array inside
        const name = jsonRes[0].name;
        const country = jsonRes[0].country;
        const webPage = jsonRes[0].web_page;

        // USE YOUR MODEL TO INSERT NAME, COUNTRY, WEBPAGE INTO DATABASE
        University.insert(name, country, webPage, req.user.id)
            .then(console.log("YAY IT WORKED"))
            .catch(err => console.error(err));

        // SENDS A JSON FILE BACK TO THE CLIENT (BROWSER)
        // res.json({ jsonRes });

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