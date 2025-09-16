/* ========== Clone nav-links into sidebar ========== */
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const sidebarLinksContainer = document.getElementById("sidebar-links");

  // Clone nav-links into sidebar
  const navLinks = document.querySelector(".nav-links").cloneNode(true);
  sidebarLinksContainer.appendChild(navLinks);

  // Open sidebar
  burger.addEventListener("click", () => {
    sidebar.classList.add("open");
  });

  // Close sidebar
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
});

/* ========== THEME TOGGLE SWITCH ========== */
// Dark/Light mode toggle
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
