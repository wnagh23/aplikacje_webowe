const btn = document.getElementById('themeToggle');
let dark = true;

btn.addEventListener('click', () => {
    dark = !dark;
    document.body.style.backgroundColor = dark ? '#121212' : '#f0f0f0';
    document.body.style.color = dark ? '#e0e0e0' : '#222';
    btn.textContent = dark ? 'Tryb nocny' : 'Tryb dzienny';
});