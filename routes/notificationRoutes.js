const express = require('express');
const NotificationController = require('../controllers/NotificationController');
const router = express.Router();

router.get('/', NotificationController.getAllNotifications);
router.get('/:id', NotificationController.getNotificationById);
router.post('/', NotificationController.createNotification);
router.put('/:id', NotificationController.updateNotification);
router.delete('/:id', NotificationController.deleteNotification);

module.exports = router;