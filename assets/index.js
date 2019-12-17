// JavaScript File for Home | Ranish Chauhan | Portfolio

// Bird Flying
const bird = document.querySelector('#bird');
const birdp = document.querySelector('#bird p');
bird.addEventListener('click', flyBird);
function flyBird() {
  bird.style.left = '100%';
  birdp.textContent = 'I am leaving now';
  setTimeout(() => (birdp.textContent = ''), 3000);
  setTimeout(() => (bird.style.display = 'none'), 10000);
}
