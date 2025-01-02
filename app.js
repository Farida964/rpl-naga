// Import express
const express = require("express");
const path = require("path");

// Import routers
const userRoutes = require("./routes/userRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const taskRoutes = require("./routes/taskRoutes");
const progressRoutes = require("./routes/progressRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

// Buat object express
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, "view")));

// Rute default untuk root (optional, agar tidak muncul "Cannot GET /")
app.get("/", (req, res) => {
    res.send("Selamat datang di API kami! 🚀");
});

// Rute untuk menampilkan halaman login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "view/pages/login.html"));
});

// Gunakan router dengan endpoint masing-masing
app.use("/api/users", userRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/notifications", notificationRoutes);

// Middleware untuk menangani rute yang tidak ditemukan
app.use((req, res) => {
    res.status(404).json({ message: "Rute tidak ditemukan! ❌" });
});

// Definisikan port
const port = 3000;

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
