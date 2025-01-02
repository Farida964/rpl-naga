const express = require('express');
const ScheduleController = require('../controllers/ScheduleController');
const router = express.Router();

router.get('/', ScheduleController.getAllSchedules);
router.get('/:id', ScheduleController.getScheduleById);
router.post('/', ScheduleController.createSchedule);
router.put('/:id', ScheduleController.updateSchedule);
router.delete('/:id', ScheduleController.deleteSchedule);

module.exports = router;