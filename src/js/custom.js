document.addEventListener('DOMContentLoaded', () => {
  const spanEl = document.querySelector('.logo span');
  
  spanEl.textContent = new Date().getFullYear();
});