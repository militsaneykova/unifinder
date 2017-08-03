const universityController = {};
const University = require('../models/university');

universityController.index = (req, res) => {

    University.get(req.user.id)
        .then(data => {
            res.render('university/university-index', { data });
        })
        .catch(err => console.error(err));
}

module.exports = universityController;