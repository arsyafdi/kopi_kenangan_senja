document.addEventListener("DOMContentLoaded", function () {
  feather.replace();

  // Seleksi Elemen
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");
  const searchForm = document.querySelector(".search-form");
  const searchButton = document.querySelector("#search-button");
  const searchBox = document.querySelector("#search-box");
  const shoppingCardButton = document.querySelector("#shopping-card-button");
  const shoppingCard = document.querySelector(".shopping-card");
  const itemDetailModal = document.querySelector("#item-detail-modal");
  const itemDetailButtons = document.querySelectorAll(".item-detail-button");
  const closeModal = document.querySelector(".modal .close-icon");

  // Hamburger Menu
  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    navbarNav.classList.toggle("active");
  });

  // Search Form
  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchForm.classList.toggle("active");
    searchBox.focus();
  });

  // Shopping Card (Cart)
  shoppingCardButton.addEventListener("click", function (e) {
    e.preventDefault();
    shoppingCard.classList.toggle("active");
  });

  // Item Detail Modal
  itemDetailButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      itemDetailModal.style.display = "flex";
    });
  });

  // Close Modal
  closeModal.addEventListener("click", function (e) {
    e.preventDefault();
    itemDetailModal.style.display = "none";
  });

  // Klik di luar modal
  window.addEventListener("click", function (e) {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = "none";
    }
  });

  // Tutup Element Saat Klik di Luar
  document.addEventListener("click", function (e) {
    // Tutup Navbar
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }

    // Tutup Search Form
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }

    // Tutup Shopping Card
    if (
      !shoppingCardButton.contains(e.target) &&
      !shoppingCard.contains(e.target)
    ) {
      shoppingCard.classList.remove("active");
    }
  });
});
