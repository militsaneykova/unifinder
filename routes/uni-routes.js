const express = require('express');
const universityRouter = express.Router();

const universityHelper = require('../services/university/university-helper');
const universityController = require('../controllers/uni-controller');

universityRouter.get('/', universityHelper.getWeather, universityController.index);

module.exports = universityRouter;