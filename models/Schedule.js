const db = require("../config/db");

const Schedule = {
  findAll: (callback) => {
    db.query("SELECT * FROM Schedules", callback);
  },
  findById: (id, callback) => {
    db.query("SELECT * FROM Schedules WHERE schedule_id = ?", [id], callback);
  },
  create: (schedule, callback) => {
    const { mahasiswa_id, dosen_id, schedule_date, status } = schedule;
    db.query(
      "INSERT INTO Schedules (mahasiswa_id, dosen_id, schedule_date, status) VALUES (?, ?, ?, ?)",
      [mahasiswa_id, dosen_id, schedule_date, status],
      callback
    );
  },
  update: (id, schedule, callback) => {
    const { mahasiswa_id, dosen_id, schedule_date, status } = schedule;
    db.query(
      "UPDATE Schedules SET mahasiswa_id = ?, dosen_id = ?, schedule_date = ?, status = ? WHERE schedule_id = ?",
      [mahasiswa_id, dosen_id, schedule_date, status, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query("DELETE FROM Schedules WHERE schedule_id = ?", [id], callback);
  },
};

module.exports = Schedule;
