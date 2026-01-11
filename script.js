// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

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