const universityController = {};

universityController.index = (req, res) => {
  res.render('university/weather-index', {
    weather: res.locals.weather,
  });
}

module.exports = weatherController;