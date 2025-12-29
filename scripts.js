// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.hidden = expanded; // if expanded, hide; else show
});

// Close mobile menu when clicking a link
mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileMenu.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Notify form (front-end demo)
// This does NOT store emails anywhere yet. It just confirms submission.
const form = document.getElementById("notifyForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const email = (data.get("email") || "").toString().trim();

  note.textContent = email
    ? "Thank you — you're on the list. We'll notify you for the first drop."
    : "Please enter a valid email.";

  form.reset();
});
