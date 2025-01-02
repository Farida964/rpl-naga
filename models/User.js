const db = require("../config/db");

const User = {
  findAll: (callback) => db.query("SELECT * FROM Users", callback),
  findById: (id, callback) => db.query("SELECT * FROM Users WHERE user_id = ?", [id], callback),
  create: (user, callback) => {
    const { name, email, role } = user;
    db.query("INSERT INTO Users (name, email, role) VALUES (?, ?, ?)", [name, email, role], callback);
  },
  update: (id, user, callback) => {
    const { name, email, role } = user;
    db.query("UPDATE Users SET name = ?, email = ?, role = ? WHERE user_id = ?", [name, email, role, id], callback);
  },
  delete: (id, callback) => db.query("DELETE FROM Users WHERE user_id = ?", [id], callback),
};

module.exports = User;
