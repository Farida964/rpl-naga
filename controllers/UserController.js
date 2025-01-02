const User = require("../models/User");

const UserController = {
  getAllUsers: (req, res) => {
    User.findAll((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  },
  getUserById: (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results[0]);
    });
  },
  createUser: (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ message: "User created", id: results.insertId });
    });
  },
  updateUser: (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    User.update(id, updatedUser, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "User updated" });
    });
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    User.delete(id, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "User deleted" });
    });
  },
};

module.exports = UserController;
