const Notification = require("../models/Notification");

const NotificationController = {
  getAllNotifications: (req, res) => {
    Notification.findAll((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  },
  getNotificationById: (req, res) => {
    const { id } = req.params;
    Notification.findById(id, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results[0]);
    });
  },
  createNotification: (req, res) => {
    const newNotification = req.body;
    Notification.create(newNotification, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ message: "Notification created", id: results.insertId });
    });
  },
  updateNotification: (req, res) => {
    const { id } = req.params;
    const updatedNotification = req.body;
    Notification.update(id, updatedNotification, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Notification updated" });
    });
  },
  deleteNotification: (req, res) => {
    const { id } = req.params;
    Notification.delete(id, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Notification deleted" });
    });
  },
};

module.exports = NotificationController;