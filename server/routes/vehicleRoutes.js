const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const authJWT = require('../middlewares/authJWT');

router.post('/', authJWT(['manager']), vehicleController.createVehicle);
router.get('/', authJWT(), vehicleController.getVehicles);
router.get('/:id', authJWT(), vehicleController.getVehicle);
router.put('/:id', authJWT(['manager']), vehicleController.updateVehicle);
router.delete('/:id', authJWT(['manager']), vehicleController.deleteVehicle);

module.exports = router; 