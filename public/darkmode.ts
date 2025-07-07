// public/darkmode.js
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const btn = document.getElementById('toggle-dark');

  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
  }

  btn?.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });
});
