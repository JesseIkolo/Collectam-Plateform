const express = require('express');
const router = express.Router();
const wastePointController = require('../controllers/wastePointController');
const authJWT = require('../middlewares/authJWT');

router.post('/', authJWT(['user', 'collector', 'manager']), wastePointController.createWastePoint);
router.get('/', authJWT(), wastePointController.getWastePoints);
router.get('/:id', authJWT(), wastePointController.getWastePoint);
router.put('/:id', authJWT(['manager']), wastePointController.updateWastePoint);
router.delete('/:id', authJWT(['manager']), wastePointController.deleteWastePoint);

module.exports = router; 