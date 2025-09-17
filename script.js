/* =========================================================
   DOM CONTENT LOADED
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     ELEMENT SELECTION
     ========================================================= */
  const burger = document.getElementById("burger");
  const dropdown = document.getElementById("dropdown");
  const navLinks = document.querySelector(".nav-links");
  const originalToggle = document.querySelector('.theme-toggle');
  const originalInput = document.getElementById('toggle-switch');

  /* =========================================================
     DROPDOWN MENU CLONE
     ========================================================= */
  // Clone nav-links into dropdown once
  const clonedNavLinks = navLinks.cloneNode(true);
  dropdown.appendChild(clonedNavLinks);

  // Clone theme toggle for dropdown once
  const clonedToggle = originalToggle.cloneNode(true);
  const clonedInput = clonedToggle.querySelector('input');
  const clonedLabel = clonedToggle.querySelector('label');
  clonedInput.id = 'toggle-switch-clone';
  clonedLabel.setAttribute('for', 'toggle-switch-clone');
  dropdown.appendChild(clonedToggle);

  /* =========================================================
     BURGER MENU TOGGLE
     ========================================================= */
  const toggleDropdown = () => {
    dropdown.classList.toggle("show");
    burger.classList.toggle("open");
  };

  burger.addEventListener("click", toggleDropdown);

  /* =========================================================
     RESET BURGER & DROPDOWN ON RESIZE
     ========================================================= */
  const resetDropdown = () => {
    if (window.innerWidth > 800) {
      dropdown.classList.remove("show");
      burger.classList.remove("open");
    }
  };

  window.addEventListener("resize", resetDropdown);

  /* =========================================================
     THEME TOGGLE FUNCTION
     ========================================================= */
  const setTheme = (darkMode) => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      originalInput.checked = true;
      clonedInput.checked = true;
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      originalInput.checked = false;
      clonedInput.checked = false;
      localStorage.setItem("theme", "light");
    }
  };

  // Sync toggle states on change
  const toggleListener = (input) => {
    input.addEventListener("change", () => {
      setTheme(input.checked);
    });
  };

  toggleListener(originalInput);
  toggleListener(clonedInput);

  /* =========================================================
     INITIAL THEME ON PAGE LOAD
     ========================================================= */
  if (localStorage.getItem("theme") === "dark") {
    setTheme(true);
  } else {
    setTheme(false);
  }

});
