const flightCtrl = require('../controllers/flight-controller');
const { Router } = require('express');
const router = Router();

router.get('/', flightCtrl.GetFlights);
router.post('/create', flightCtrl.CreateFlight);
router.delete('/delete/:id', flightCtrl.DeleteFlight);
router.patch('/edit/:id', flightCtrl.UpdateFlight);

module.exports = router;
