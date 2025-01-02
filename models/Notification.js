const db = require("../config/db");

const Notification = {
  findAll: (callback) => db.query("SELECT * FROM Notifications", callback),
  findById: (id, callback) => db.query("SELECT * FROM Notifications WHERE notification_id = ?", [id], callback),
  create: (notification, callback) => {
    const { mahasiswa_id, message, date } = notification;
    db.query(
      "INSERT INTO Notifications (mahasiswa_id, message, date) VALUES (?, ?, ?)",
      [mahasiswa_id, message, date],
      callback
    );
  },
  update: (id, notification, callback) => {
    const { mahasiswa_id, message, date } = notification;
    db.query(
      "UPDATE Notifications SET mahasiswa_id = ?, message = ?, date = ? WHERE notification_id = ?",
      [mahasiswa_id, message, date, id],
      callback
    );
  },
  delete: (id, callback) => db.query("DELETE FROM Notifications WHERE notification_id = ?", [id], callback),
};

module.exports = Notification;