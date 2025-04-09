// Force dark theme and disable theme switcher
document.documentElement.classList.add("color-theme-2");
document.documentElement.dataset.theme = "dark";
localStorage.setItem("theme", "2");

// Add this to window.onload to ensure it runs BEFORE GitBook initializes
window.GitBookInitialTheme = 'dark';
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', '2');
    localStorage.setItem('fontfamily', 'sans');
}
