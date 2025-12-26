# Laporan Tugas Besar: Pengembangan Website Nexus Store

## 1. Identitas Proyek
* **Nama Website:** Nexus Store
* **Kategori:** E-Commerce Gadget & Elektronik
* **Konsep Desain:** *Futuristic Glassmorphism* (Dark Mode)
* **Deskripsi:** Nexus Store adalah platform e-commerce berbasis web yang dirancang untuk memberikan pengalaman belanja gadget yang imersif dan modern. Mengusung gaya desain *Glassmorphism*, website ini menonjolkan estetika transparansi, efek *blur*, dan elemen neon yang elegan di atas latar belakang gelap. Fokus utama pengembangan adalah menciptakan antarmuka yang responsif (Mobile-First), aksesibel, dan interaktif.

### Anggota Kelompok:
1. **Muhammad Arya Alqadi** (4524210058)
2. **Muhamamad Arkan** (4524210114)
3. **Rangga Veda Aswanga** (4524210118)
4. **Muhammad Jibran Ferdian** (4524210067)
5. **Muhammad Farel Alberto** (4524210061)
6. **Aufa Al Ghiyats Sulthan Priatmojo** (4524210132)

---

## 2. Arsitektur & Teknologi (Tech Stack)

Kami menggunakan standar industri pengembangan web modern dengan rincian sebagai berikut:

| Teknologi | Implementasi Spesifik |
| :--- | :--- |
| **HTML5** | Penggunaan *Semantic Tags* (`<header>`, `<main>`, `<article>`, `<footer>`) untuk memastikan struktur dokumen valid dan ramah SEO (*Search Engine Optimization*). |
| **CSS3 (Custom)** | Implementasi **CSS Variables** (`:root`) untuk konsistensi warna. Penggunaan properti `backdrop-filter: blur()` dan `background: rgba(255, 255, 255, 0.1)` untuk menciptakan efek kaca (*Glassmorphism*). |
| **Bootstrap 5.3** | Framework CSS utama. Menggunakan sistem **Grid System** (Row/Col) untuk layout responsif dan komponen **Modal** untuk detail produk. |
| **JavaScript (ES6)** | Vanilla JS untuk memanipulasi DOM. Menggunakan *Event Listeners* untuk menangani interaksi pengguna (Klik filter, Buka modal, Kirim pesan WA). |
| **FontAwesome 6** | Pustaka ikon vektor (SVG) untuk elemen navigasi, sosial media, dan indikator fitur (misal: ikon keranjang, ikon user). |
| **Google Fonts** | Menggunakan font **Poppins** (Sans-Serif) dengan variasi bobot 300, 400, dan 600 untuk keterbacaan modern. |

---

## 3. Daftar Fitur (Feature List)

Berikut adalah seluruh fitur yang telah diimplementasikan dalam website Nexus Store:

### A. Fitur Navigasi & Layout
1.  **Responsive Navbar:** Menu navigasi yang otomatis menyesuaikan diri. Pada mode desktop tampil melebar, sedangkan pada mode mobile berubah menjadi *Hamburger Menu*.
2.  **Sticky Header:** Navigasi tetap terlihat di bagian atas layar saat pengguna melakukan *scrolling*.
3.  **Hero Section dengan Video:** Bagian pembuka halaman utama menggunakan latar belakang video *looping* untuk memberikan kesan visual yang premium.
4.  **Informative Footer:** Bagian kaki website yang memuat hak cipta, tautan sosial media, dan informasi singkat toko.

### B. Fitur Katalog & Interaksi Produk
5.  **Grid System Katalog:** Tampilan produk disusun menggunakan *Grid System* yang fleksibel (2 kolom di HP, 3 di Tablet, 4 di Desktop).
6.  **Filter Kategori Dinamis:** Pengguna dapat menyaring produk (Laptop/HP/Gaming) secara instan tanpa perlu *reload* halaman (menggunakan JavaScript DOM Manipulation).
7.  **Hover Effects:** Efek animasi halus (transform scale & glow) saat kursor diarahkan ke kartu produk, memberikan umpan balik visual yang interaktif.

### C. Fitur Transaksi & Detail
8.  **Product Detail Modal:** Jendela *pop-up* yang muncul saat tombol "Detail" diklik, menampilkan spesifikasi lengkap dan foto besar tanpa harus berpindah halaman.
9.  **Direct-to-WhatsApp Checkout:** Tombol "Beli Sekarang" terintegrasi langsung dengan API WhatsApp. Sistem otomatis membuat pesan template berisi nama produk dan harga, memudahkan pengguna memesan ke admin.

### D. Fitur Halaman Pendukung
10. **Halaman Syarat & Ketentuan:** Halaman khusus berisi informasi kebijakan toko yang disusun rapi menggunakan layout kartu (*Cards*).
11. **Dark Mode Theme:** Seluruh antarmuka menggunakan tema gelap yang nyaman di mata (*Eye Comfort*) dan hemat daya pada layar OLED/AMOLED.

---

## 4. Struktur Halaman (Sitemap)

1. **Homepage (`index.html`)**
   * *Hero Section:* Video Background & Call to Action.
   * *Features Section:* Keunggulan toko (24/7 Support, Garansi Resmi).
   * *Product Section:* Daftar produk unggulan.
2. **Katalog Produk (`produk.html`)**
   * *Filter Bar:* Navigasi kategori.
   * *Main Catalog:* Semua produk ditampilkan.
   * *Modal Container:* Wadah tersembunyi untuk detail produk.
3. **Syarat & Ketentuan (`syarat.html`)**
   * Informasi garansi, pengiriman, dan kebijakan pengembalian.

---

## 5. Bukti Responsivitas (Screenshot)

Berikut adalah dokumentasi tampilan website pada berbagai *breakpoint* perangkat:

### Halaman Katalog & Modal
| Desktop View | Tablet View | Mobile View |
| :---: | :---: | :---: |
| ![Katalog Desktop](docs/img/Desktop.png) | ![Katalog Tablet](docs/img/Tablet.png) | ![Katalog HP](docs/img/HP.png) |

*(Catatan: Gambar tersimpan dalam folder `docs/img/`)*

---

## 6. Audit Performa & Aksesibilitas

### A. Hasil Audit Google Lighthouse
Kami telah melakukan pengujian performa menggunakan Google Chrome Lighthouse:
* **Performance:** Hijau (Optimal karena minim penggunaan library berat).
* **Accessibility:** Semua gambar memiliki `alt text`, dan rasio kontras warna teks di atas latar belakang memenuhi standar WCAG AA.
* **Best Practices:** Kode bebas dari *error console* dan atribut HTML yang *deprecated*.

### B. Kompatibilitas Browser
Website telah diuji dan berjalan lancar pada:
* Google Chrome

---

### Akses Proyek:
* **Link Repository GitHub:** https://github.com/mhmdaryaqadi/project-uas-dw-a-prak.git
* **Link Website Live (Demo):** https://mhmdaryaqadi.github.io/project-uas-dw-a-prak/
