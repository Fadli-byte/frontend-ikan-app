const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk menyajikan file statis (CSS, JS, images) dari folder 'public'
// Ini sangat penting agar tampilan web Anda tidak rusak.
app.use(express.static(path.join(__dirname, 'public')));
app.use("/js", express.static(path.join(__dirname, "js")));


// Set EJS sebagai view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ambil API_URL dari environment variable yang kita set di Vercel
const API_URL = process.env.API_URL;

// ==================== ROUTES (HANYA UNTUK TAMPILAN) ====================

// Halaman utama akan diarahkan ke halaman kamera ikan
app.get("/", (req, res) => {
    // Kita kirim variabel API_URL ke halaman EJS
    res.render("kamera_ikan", { apiUrl: API_URL, user: { username: "Guest" } });
});

// Anda tetap bisa punya rute lain untuk halaman statis
app.get("/faq", (req, res) => {
    res.render("faq", { apiUrl: API_URL });
});

app.get("/ekosistem", (req, res) => {
    res.render("ekosistem", { apiUrl: API_URL });
});

// Tambahkan rute lain yang Anda butuhkan di sini...

// =======================================================================

// Ekspor aplikasi untuk Vercel
module.exports = app;
