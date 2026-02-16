const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
    });
});

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
}