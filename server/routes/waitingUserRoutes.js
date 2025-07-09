const express = require('express');
const router = express.Router();
const waitingUserController = require('../controllers/waitingUserController');

router.post('/', waitingUserController.register);
 
module.exports = router; 