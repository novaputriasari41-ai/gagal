// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Mode terang/gelap
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const cur = document.body.getAttribute("data-theme");
  document.body.setAttribute("data-theme", cur === "dark" ? "light" : "dark");
});

// Hamburger menu
const hambtn = document.getElementById("hambtn");
const navLinks = document.getElementById("navLinks");

hambtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Tutup menu setelah klik di HP
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 768) navLinks.classList.remove("show");
  });
});

// Navigasi antar menu
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");
function showSection(id) {
  sections.forEach(sec => {
    sec.classList.remove("active");
    if (sec.id === id) sec.classList.add("active");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});
document.getElementById("openQuizBtn").addEventListener("click", () => showSection("quiz"));
showSection("home");
