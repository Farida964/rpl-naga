const Task = require("../models/Task");

const TaskController = {
  getAllTasks: (req, res) => {
    Task.findAll((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  },
  getTaskById: (req, res) => {
    const { id } = req.params;
    Task.findById(id, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results[0]);
    });
  },
  createTask: (req, res) => {
    const newTask = req.body;
    Task.create(newTask, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ message: "Task created", id: results.insertId });
    });
  },
  updateTask: (req, res) => {
    const { id } = req.params;
    const updatedTask = req.body;
    Task.update(id, updatedTask, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Task updated" });
    });
  },
  deleteTask: (req, res) => {
    const { id } = req.params;
    Task.delete(id, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Task deleted" });
    });
  },
};

module.exports = TaskController;