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
