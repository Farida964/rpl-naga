// Import Express
const express = require('express');
const app = express();
const port = 3000;

// Menyajikan file statis (misalnya HTML, CSS, JS) dari folder 'public'
app.use(express.static('public'));

// Rute untuk halaman utama (root)
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dashboard</title>
            <!-- Link ke file CSS -->
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
        <div>
        
        </div>
            <!-- Start Features Area -->
            <section id="features" class="features section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <h3 class="wow zoomIn" data-wow-delay=".2s">Features</h3>
                                <h2 class="wow fadeInUp" data-wow-delay=".4s">Your Experience Gets Better And Better Over Time.</h2>
                                <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Konten Features di sini -->
                    </div>
                </div>
            </section>
            <!-- End Features Area -->

             <!-- Start Features Area -->
    <section id="features" class="features section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Start Single Feature -->
                    <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                        <i class="lni lni-cloud-upload"></i>
                        <h3>Push to Deploy</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page at its layout.</p>
                    </div>
                    <!-- End Single Feature -->
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Start Single Feature -->
                    <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                        <i class="lni lni-lock"></i>
                        <h3>SSL Certificates</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page at its layout.</p>
                    </div>
                    <!-- End Single Feature -->
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Start Single Feature -->
                    <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                        <i class="lni lni-reload"></i>
                        <h3>Simple Queues</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page at its layout.</p>
                    </div>
                    <!-- End Single Feature -->
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Start Single Feature -->
                    <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                        <i class="lni lni-shield"></i>
                        <h3>Advanced Security</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page at its layout.</p>
                    </div>
                    <!-- End Single Feature -->
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Start Single Feature -->
                    <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                        <i class="lni lni-cog"></i>
                        <h3>Powerful API</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page at its layout.</p>
                    </div>
                    <!-- End Single Feature -->
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Start Single Feature -->
                    <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                        <i class="lni lni-layers"></i>
                        <h3>Database Backups</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page at its layout.</p>
                    </div>
                    <!-- End Single Feature -->
                </div>
            </div>
        </div>
    </section>
    <!-- End Features Area -->

        </body>
        </html>
    `);
});

// Menjalankan server di port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
