app.use(express.static('public'));

// Rute untuk halaman utama (root)
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Node.js with Express</title>
        </head>
        <body>
            <h1>Welcome to My First Node.js Application!</h1>
            <p>This is a simple example using Express.</p>
        </body>
        </html>
    `);
});