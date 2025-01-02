const Schedule = require("../models/Schedule");

const ScheduleController = {
  getAllSchedules: (req, res) => {
    Schedule.findAll((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  },
  getScheduleById: (req, res) => {
    const { id } = req.params;
    Schedule.findById(id, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results[0]);
    });
  },
  createSchedule: (req, res) => {
    const newSchedule = req.body;
    Schedule.create(newSchedule, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ message: "Schedule created", id: results.insertId });
    });
  },
  updateSchedule: (req, res) => {
    const { id } = req.params;
    const updatedSchedule = req.body;
    Schedule.update(id, updatedSchedule, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Schedule updated" });
    });
  },
  deleteSchedule: (req, res) => {
    const { id } = req.params;
    Schedule.delete(id, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Schedule deleted" });
    });
  },
};

module.exports = ScheduleController;