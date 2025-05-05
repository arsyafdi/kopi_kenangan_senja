/**
 * MENANGANI PERILAKU NAVBAR RESPONSIF
 * Kode ini dijalankan setelah seluruh konten DOM selesai dimuat
 */
document.addEventListener("DOMContentLoaded", function () {
  // ==================== INISIALISASI FEATHER ICONS ====================
  // Mengkonversi semua elemen dengan atribut data-feather menjadi ikon SVG
  feather.replace();

  // ==================== SELEKSI ELEMEN DOM ====================
  // Temukan menu navigasi utama
  const navbarNav = document.querySelector(".navbar-nav");
  // Temukan tombol menu hamburger
  const hamburger = document.querySelector("#hamburger-menu");
  // Temukan form pencarian
  const searchForm = document.querySelector(".search-form");
  // Temukan tombol pencarian
  const searchButton = document.querySelector("#search-button");

  // ==================== TOGGLE MENU HAMBURGER ====================
  hamburger.addEventListener("click", function (e) {
    // Mencegah perilaku default link
    e.preventDefault();
    // Menghentikan propagasi event ke parent elements
    e.stopPropagation();
    // Toggle class 'active' untuk menampilkan/menyembunyikan menu
    navbarNav.classList.toggle("active");
  });

  // ==================== TOGGLE SEARCH FORM ====================
  searchButton.addEventListener("click", function (e) {
    // Mencegah perilaku default tombol
    e.preventDefault();
    // Toggle class 'active' untuk menampilkan/menyembunyikan form pencarian
    searchForm.classList.toggle("active");
  });

  // ==================== MENUTUP MENU SAAT KLIK DI LUAR ====================
  document.addEventListener("click", function (e) {
    // Jika yang diklik BUKAN hamburger DAN BUKAN navbarNav
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      // Hapus class 'active' untuk menyembunyikan menu
      navbarNav.classList.remove("active");
    }
  });
});
