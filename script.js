// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

// Theme toggle (light/dark) with persistence
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;

function setTheme(mode) {
  root.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);

  // Update icon + accessible label
  if (themeBtn) {
    themeBtn.innerHTML = mode === "light"
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
    themeBtn.setAttribute(
      "aria-label",
      `Switch to ${mode === "light" ? "dark" : "light"} mode`
    );
  }
}

// Load saved preference or system default
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(prefersLight ? "light" : "dark");
}

// Toggle on click
themeBtn?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

function setMenu(open) {
  mobileNav.style.display = open ? "block" : "none";
  mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  menuBtn.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
}

let isOpen = false;
menuBtn?.addEventListener("click", () => {
  isOpen = !isOpen;
  setMenu(isOpen);
});

// Close mobile menu when clicking a link
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    isOpen = false;
    setMenu(false);
  });
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Small hint about the CV file
const cvHint = document.getElementById("cvHint");
cvHint.textContent = "If the download doesn’t work, make sure the PDF filename matches exactly.";

// Ensure Instagram embeds render (safe even if embed.js is blocked)
window.addEventListener("load", () => {
  if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === "function") {
    window.instgrm.Embeds.process();
  }
});