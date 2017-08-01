const universityController = {};

universityController.index = (req, res) => {
  res.render('weather/weather-index', {
    weather: res.locals.weather,
  });
}

module.exports = weatherController;