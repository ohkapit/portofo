import { showSection } from './navigation.js';

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showSection(btn.dataset.target);
  });
});
