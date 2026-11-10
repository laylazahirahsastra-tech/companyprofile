
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-menu");
    const currentYear = document.querySelector("#current-year");

    // Tahun otomatis pada footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (!menuToggle || !navMenu) {
        return;
    }

    function closeMenu() {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Buka menu navigasi"
        );
    }

    function openMenu() {
        navMenu.classList.add("open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute(
            "aria-label",
            "Tutup menu navigasi"
        );
    }

    // Buka atau tutup menu
    menuToggle.addEventListener("click", () => {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Tutup menu setelah tautan dipilih
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Tutup menu dengan tombol Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Tutup menu jika kembali ke ukuran desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
            closeMenu();
        }
    });
});
