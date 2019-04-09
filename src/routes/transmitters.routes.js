const express = require('express');
const router = express.Router();
const transmittersController = require('../controllers/transmitters.controller');

// Home page route.
router.get('/', transmittersController.transmitters);

// About page route.
router.get('/location', transmittersController.transmittersLocation)

module.exports = router;