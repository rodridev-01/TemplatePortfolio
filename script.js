const sound = document.getElementById('button-sound');
const buttons = document.querySelectorAll('.play-sound');

sound.volume = 0.3;
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  });
});

const images = document.querySelectorAll('.project-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
  image.addEventListener('click', (e) => {
    lightbox.style.display = 'flex';
    lightboxImage.src = e.target.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.side-menu ul li a');

menuToggle.addEventListener('click', function () {
  sideMenu.style.left = '0';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
  sideMenu.style.left = '-250px';
  overlay.style.display = 'none';
});

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    sideMenu.style.left = '-250px';
    overlay.style.display = 'none';
  });
});

document.getElementById('languageSelector').addEventListener('change', function () {
  const selectedLanguage = this.value;
  if (selectedLanguage === 'es') {
    window.location.href = '/es';
  } else if (selectedLanguage === 'en') {
    window.location.href = '/index.html';
  }
});

// Función para alternar el estado del reproductor (abierto/cerrado)
const spotifyContainer = document.getElementById('spotify-player');
const player = document.getElementById('player');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
  spotifyContainer.classList.toggle('open');
  spotifyContainer.classList.toggle('closed');
  if (spotifyContainer.classList.contains('open')) {
    player.style.display = 'block';  // Muestra el iframe cuando está abierto
  } else {
    player.style.display = 'none';  // Oculta el iframe cuando está cerrado
  }
});