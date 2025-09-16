/* ========== DROPDOWN MENU CLONE ========== */
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const dropdown = document.getElementById("dropdown");

  // Clone nav-links into dropdown
  const navLinks = document.querySelector(".nav-links");
  const newList = navLinks.cloneNode(true); // deep clone
  dropdown.appendChild(newList);

  // Toggle dropdown on burger click
  burger.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    burger.classList.toggle("open"); // toggles animation
  });
});

/* ========== THEME TOGGLE SWITCH ========== */
const toggleSwitch = document.getElementById('toggle-switch');

// Check if user had a preference saved
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});
