const universityController = {};

universityController.index = (req, res) => {
  res.render('university/university-index', {
    country: res.params.country,
    city: res.params.city,
    website: res.params.website
  });
}

module.exports = universityController;