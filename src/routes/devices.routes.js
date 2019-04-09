const express = require('express');
const router = express.Router();
const devicesController = require('../controllers/devices.controller');

// Home page route.
router.get('/', devicesController.index);

// About page route.
router.get('/location', devicesController.devicesLocation);

module.exports = router;