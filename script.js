// Dark Mode
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? "☀" : "🌙";
});

// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.navbar ul');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});