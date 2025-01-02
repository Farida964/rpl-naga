const Progress = require("../models/Progress");

const ProgressController = {
  getAllProgress: (req, res) => {
    Progress.findAll((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  },
  getProgressById: (req, res) => {
    const { id } = req.params;
    Progress.findById(id, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results[0]);
    });
  },
  createProgress: (req, res) => {
    const newProgress = req.body;
    Progress.create(newProgress, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ message: "Progress created", id: results.insertId });
    });
  },
  updateProgress: (req, res) => {
    const { id } = req.params;
    const updatedProgress = req.body;
    Progress.update(id, updatedProgress, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Progress updated" });
    });
  },
  deleteProgress: (req, res) => {
    const { id } = req.params;
    Progress.delete(id, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Progress deleted" });
    });
  },
};

module.exports = ProgressController;