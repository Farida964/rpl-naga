const db = require("../config/db");

const Progress = {
  findAll: (callback) => db.query("SELECT * FROM Progress", callback),
  findById: (id, callback) => db.query("SELECT * FROM Progress WHERE progress_id = ?", [id], callback),
  create: (progress, callback) => {
    const { mahasiswa_id, progress_detail, date } = progress;
    db.query(
      "INSERT INTO Progress (mahasiswa_id, progress_detail, date) VALUES (?, ?, ?)",
      [mahasiswa_id, progress_detail, date],
      callback
    );
  },
  update: (id, progress, callback) => {
    const { mahasiswa_id, progress_detail, date } = progress;
    db.query(
      "UPDATE Progress SET mahasiswa_id = ?, progress_detail = ?, date = ? WHERE progress_id = ?",
      [mahasiswa_id, progress_detail, date, id],
      callback
    );
  },
  delete: (id, callback) => db.query("DELETE FROM Progress WHERE progress_id = ?", [id], callback),
};

module.exports = Progress;