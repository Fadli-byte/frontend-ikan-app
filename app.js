const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Ambil API_URL dari environment variable yang kita set di Vercel
const API_URL = process.env.API_URL;

// Middleware untuk menyajikan file statis (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/videos", express.static(path.join(__dirname, "videos")));
app.use("/data", express.static(path.join(__dirname, "data")));
app.use("/js", express.static(path.join(__dirname, "js")));

// Set EJS sebagai view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware sederhana untuk dummy session
// Ini tidak akan berfungsi seperti session asli, hanya untuk mencegah error
app.use((req, res, next) => {
    res.locals.user = { username: 'Guest' };
    res.locals.admin = { username: 'Admin' };
    next();
});

// ==================== ROUTES (HANYA UNTUK TAMPILAN) ====================

// Halaman utama sekarang adalah /home
app.get("/", (req, res) => res.render("home", { berita: [] })); // Menampilkan halaman home dengan data berita kosong
app.get("/home", (req, res) => res.render("home", { berita: [] })); // Sama seperti di atas

// Halaman Login & Register (hanya tampilan)
app.get("/login", (req, res) => res.render("login", { error: null }));
app.get("/register", (req, res) => res.render("register", { error: null }));
app.get("/login-admin", (req, res) => res.render("login_admin", { error: null }));

// Halaman Admin (hanya tampilan)
app.get("/admin-home", (req, res) => res.render("admin_home", { berita: [] }));
app.get("/admin/add", (req, res) => res.render("admin_add_news"));
app.get("/admin/edit/:id", (req, res) => res.render("admin_edit_news", { berita: {} })); // Data berita kosong

// Halaman Fitur Utama
app.get("/kamera-ikan", (req, res) => res.render("kamera_ikan", { apiUrl: API_URL }));
app.get("/faq", (req, res) => res.render("faq", { apiUrl: API_URL }));

// Halaman Lainnya
app.get("/ekosistem", (req, res) => res.render("ekosistem"));
app.get("/prediksi", (req, res) => res.render("prediksi"));
app.get("/voice", (req, res) => res.render("voice"));
app.get("/lamun2019", (req, res) => res.render("lamun2019"));
app.get("/lamun2020", (req, res) => res.render("lamun2020"));
app.get("/lamun2021", (req, res) => res.render("lamun2021"));
app.get("/lamun2022", (req, res) => res.render("lamun2022"));
app.get("/lamun2023", (req, res) => res.render("lamun2023"));
app.get("/lamun2024", (req, res) => res.render("lamun2024"));
app.get("/lamun2025", (req, res) => res.render("lamun2025"));
app.get("/zpi", (req, res) => res.render("zpi"));
app.get("/prediksilamun", (req, res) => res.render("prediksilamun"));
app.get("/prediksimangrove", (req, res) => res.render("prediksimangrove"));
app.get("/prediksiterumbu", (req, res) => res.render("prediksiterumbu"));
app.get("/mangrove2019", (req, res) => res.render("mangrove2019"));
app.get("/mangrove2020", (req, res) => res.render("mangrove2020"));
app.get("/mangrove2021", (req, res) => res.render("mangrove2021"));
app.get("/mangrove2022", (req, res) => res.render("mangrove2022"));
app.get("/mangrove2023", (req, res) => res.render("mangrove2023"));
app.get("/mangrove2024", (req, res) => res.render("mangrove2024"));
app.get("/mangrove2025", (req, res) => res.render("mangrove2025"));
app.get("/mangrove2030", (req, res) => res.render("mangrove2030"));
app.get("/artikel", (req, res) => res.render("artikel"));
app.get("/Terumbu2019", (req, res) => res.render("Terumbu2019"));
app.get("/Terumbu2020", (req, res) => res.render("Terumbu2020"));
app.get("/Terumbu2021", (req, res) => res.render("Terumbu2021"));
app.get("/Terumbu2022", (req, res) => res.render("Terumbu2022"));
app.get("/Terumbu2023", (req, res) => res.render("Terumbu2023"));
app.get("/Terumbu2024", (req, res) => res.render("Terumbu2024"));
app.get("/Terumbu2025", (req, res) => res.render("Terumbu2025"));

// Ekspor aplikasi untuk Vercel
module.exports = app;
