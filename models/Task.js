const db = require("../config/db");

const Task = {
  findAll: (callback) => db.query("SELECT * FROM Tasks", callback),
  findById: (id, callback) => db.query("SELECT * FROM Tasks WHERE task_id = ?", [id], callback),
  create: (task, callback) => {
    const { mahasiswa_id, description, deadline, priority } = task;
    db.query(
      "INSERT INTO Tasks (mahasiswa_id, description, deadline, priority) VALUES (?, ?, ?, ?)",
      [mahasiswa_id, description, deadline, priority],
      callback
    );
  },
  update: (id, task, callback) => {
    const { mahasiswa_id, description, deadline, priority } = task;
    db.query(
      "UPDATE Tasks SET mahasiswa_id = ?, description = ?, deadline = ?, priority = ? WHERE task_id = ?",
      [mahasiswa_id, description, deadline, priority, id],
      callback
    );
  },
  delete: (id, callback) => db.query("DELETE FROM Tasks WHERE task_id = ?", [id], callback),
};

module.exports = Task;
