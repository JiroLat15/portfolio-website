/* ========== DROPDOWN MENU CLONE & BURGER ANIMATION ========== */
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
    burger.classList.toggle("open"); // toggles burger animation
  });

  /* ========== THEME TOGGLE SWITCH CLONE FOR SMALL SCREENS ========== */
  const themeToggle = document.querySelector('.theme-toggle');
  const toggleSwitch = document.getElementById('toggle-switch');

  function updateDropdownToggle() {
    // Remove old cloned toggle if exists
    const existingClone = dropdown.querySelector('.theme-toggle');
    if (existingClone) existingClone.remove();

    // Only add toggle if screen is <= 800px (zoomed-in or mobile)
    if (window.innerWidth <= 800) {
      const toggleClone = themeToggle.cloneNode(true);

      // Update cloned input ID and label 'for' to be unique
      const clonedInput = toggleClone.querySelector('input');
      const clonedLabel = toggleClone.querySelector('label');
      clonedInput.id = 'toggle-switch-clone';
      clonedLabel.setAttribute('for', 'toggle-switch-clone');

      // Append toggle clone **below the links**
      const dropdownList = dropdown.querySelector('ul');
      dropdown.insertBefore(toggleClone, dropdownList.nextSibling);

      // Sync state with original toggle
      clonedInput.checked = toggleSwitch.checked;

      // Add event listener for cloned toggle
      clonedInput.addEventListener('change', () => {
        if (clonedInput.checked) {
          document.body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
        } else {
          document.body.classList.remove('dark-mode');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  // Run once on page load
  updateDropdownToggle();

  // Run on window resize
  window.addEventListener('resize', updateDropdownToggle);
});

/* ========== THEME TOGGLE SWITCH FOR DESKTOP ========== */
const toggleSwitch = document.getElementById('toggle-switch');

// Check if user had a preference saved
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (toggleSwitch) toggleSwitch.checked = true;
}

// Desktop toggle listener
toggleSwitch?.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});
