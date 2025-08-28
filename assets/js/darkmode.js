// assets/js/dark-mode.js
  function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    console.log("Is dark mode:", isDarkMode);  // Debugging line
    
    if (isDarkMode) {
      document.documentElement.style.setProperty('--text-color-light', 'var(--text-color-dark)');
      document.documentElement.style.setProperty('--bg-color-light', 'var(--bg-color-dark)');
      console.log("Switched to dark mode");  // Debugging line
    } else {
      document.documentElement.style.setProperty('--text-color-light', '#000');
      document.documentElement.style.setProperty('--bg-color-light', '#fff');
      console.log("Switched to light mode");  // Debugging line
    }
  }
  