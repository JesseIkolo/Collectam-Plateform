const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');
const authJWT = require('../middlewares/authJWT');

router.post('/', authJWT(['manager', 'user']), missionController.createMission);
router.get('/', authJWT(), missionController.getMissions);
router.get('/:id', authJWT(), missionController.getMission);
router.put('/:id', authJWT(['manager', 'collector']), missionController.updateMission);
router.delete('/:id', authJWT(['manager']), missionController.deleteMission);

module.exports = router; 