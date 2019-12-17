// JavaScript File for About | Ranish Chauhan | Portfolio

// Dark Theme
const darkThemeButton = document.getElementById('darkThemeButton');
const darkThemeStatus = document.getElementById('darkThemeStatus');
const about = document.getElementById('about');
// const skillsListi = document.querySelectorAll('.skillsList i');
darkThemeButton.addEventListener('click', darkIt);
function darkIt(e) {
  if (darkThemeStatus.textContent === 'ON') {
    about.style.color = '#fff';
    about.style.backgroundColor = '#222';
    darkThemeStatus.textContent = 'OFF';
  } else {
    about.style.color = '#111';
    about.style.backgroundColor = '#fff';
    darkThemeStatus.textContent = 'ON';
  }
  e.preventDefault();
}
