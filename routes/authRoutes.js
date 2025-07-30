const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Routes
router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

// Export the router!
module.exports = router;
