// Update year dynamically in the footer
document.getElementById('year').textContent = new Date().getFullYear();
// Ambil elemen menu dan overlay
const menuIcon = document.getElementById('menu-icon');
const menuOverlay = document.getElementById('menu-overlay');
const closeOverlay = document.getElementById('close-overlay');

// Tampilkan overlay saat ikon menu diklik
menuIcon.addEventListener('click', () => {
  menuOverlay.classList.add('active');
});

// Tutup overlay saat tombol tutup diklik
closeOverlay.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
});
menuIcon.addEventListener('click', () => {
  console.log('Menu icon clicked'); // Untuk memastikan event terpicu
  menuOverlay.style.display = 'block';
});