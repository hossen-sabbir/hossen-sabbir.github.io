const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
}


// ================================
// LIGHT / DARK THEME
// ================================

function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById("theme-icon");

    if (html.getAttribute("data-theme") === "dark") {
        html.setAttribute("data-theme", "light");
        icon.className = "fas fa-moon";
    } else {
        html.setAttribute("data-theme", "dark");
        icon.className = "fas fa-sun";
    }

    localStorage.setItem(
        "theme",
        html.getAttribute("data-theme")
    );
}


// Restore saved theme
const savedTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute(
    "data-theme",
    savedTheme
);

const themeIcon = document.getElementById("theme-icon");

if (themeIcon) {
    themeIcon.className =
        savedTheme === "dark"
            ? "fas fa-sun"
            : "fas fa-moon";
}

