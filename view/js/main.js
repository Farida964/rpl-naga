async function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.success) {
        alert('Login successful!');
        window.location.href = `/${data.role}.html`;
    } else {
        alert('Invalid credentials');
    }
}
