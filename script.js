/* =========================================================
   DOM CONTENT LOADED
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     BURGER MENU & DROPDOWN
     ========================================================= */
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

  // Reset burger & dropdown on resize (>800px)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      dropdown.classList.remove("show");
      burger.classList.remove("open");
    }
  });


  /* =========================================================
     THEME TOGGLE (SYNCED ACROSS ALL VARIANTS)
     ========================================================= */
  const themeToggleOriginal = document.querySelector('.theme-toggle');

  // Function to sync theme and all toggles
  function setTheme(theme) {
    const toggleSwitches = document.querySelectorAll('.theme-toggle input');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleSwitches.forEach(t => t.checked = true);
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      toggleSwitches.forEach(t => t.checked = false);
      localStorage.setItem('theme', 'light');
    }
  }

  // Apply saved theme on load
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Add event listener to original toggle
  const originalInput = themeToggleOriginal.querySelector('input');
  originalInput.addEventListener('change', () => {
    setTheme(originalInput.checked ? 'dark' : 'light');
  });


  /* =========================================================
     CLONE THEME TOGGLE FOR SMALL SCREENS
     ========================================================= */
  function updateDropdownToggle() {
    // Remove old clone if exists
    const existingClone = dropdown.querySelector('.theme-toggle');
    if (existingClone) existingClone.remove();

    // Only add toggle if screen width <= 800px
    if (window.innerWidth <= 800) {
      const toggleClone = themeToggleOriginal.cloneNode(true);
      const clonedInput = toggleClone.querySelector('input');
      const clonedLabel = toggleClone.querySelector('label');

      // Update ID & label 'for' to avoid duplicates
      clonedInput.id = 'toggle-switch-clone';
      clonedLabel.setAttribute('for', 'toggle-switch-clone');

      // Append cloned toggle below nav links in dropdown
      const dropdownList = dropdown.querySelector('ul');
      dropdown.insertBefore(toggleClone, dropdownList.nextSibling);

      // Sync state with current theme
      clonedInput.checked = originalInput.checked;

      // Event listener for cloned toggle
      clonedInput.addEventListener('change', () => {
        setTheme(clonedInput.checked ? 'dark' : 'light');
      });
    }
  }

  // Initial run
  updateDropdownToggle();

  // Update toggle on window resize
  window.addEventListener('resize', updateDropdownToggle);

});
