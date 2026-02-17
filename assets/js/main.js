// Kroll & Kroll – main.js

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

if (btn && menu) {
    btn.addEventListener("click", () => {
        const open = menu.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
    });

    // Close menu when clicking a link
    menu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            menu.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
        });
    });
}
