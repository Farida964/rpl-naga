// Import Express
const express = require('express');
const app = express();
const port = 3000;

// Menyajikan file statis (misalnya HTML, CSS, JS) dari folder 'public'
app.use(express.static('public'));

// login.js

function loginUser() {
    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simulate a successful login (replace this with actual authentication logic)
    if (username && password && role) {
        // Display success notification
        alert('Login berhasil! Selamat datang, ' + username + '.');

        // Redirect to dashboard (replace 'dashboard.html' with your actual dashboard page)
        window.location.href = 'dashboard.html';
    } else {
        // Handle login failure (optional)
        alert('Login gagal! Silakan periksa kredensial Anda.');
    }
}

// Rute untuk halaman utama (root)
app.get('/', (req, res) => {
    res.send(`


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <form onsubmit="loginUser(); return false;">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>
            <br><br>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <br><br>
            <label for="role">Role</label>
            <select id="role" name="role" required>
                <option value="" disabled selected>Masuk Sebagai</option>
                <option value="admin">Admin</option>
                <option value="mahasiswa">Mahasiswa</option>
                <option value="dosen">Dosen</option>
            </select>
            <br><br>

            <button type="submit">Login</button>
        </form>
    </div>
    
    <!-- Link to the external JavaScript file -->
    <script src="../js/login.js"></script>
</body>
</html>
 `);
});

// Menjalankan server di port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});