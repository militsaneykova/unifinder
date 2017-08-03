const express = require('express');
const universityRouter = express.Router();

const universityHelper = require('../services/university/university-helper');
const universityController = require('../controllers/uni-controller');

universityRouter.get('/', universityHelper.getCountry, universityController.index);
universityRouter.post('/index', universityHelper.getCountry, universityController.index);

module.exports = universityRouter;