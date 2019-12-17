// JavaScript File for All Pages | Ranish Chauhan | Portfolio

const subMenu = document.querySelector('.subMenu');

// Responsive Menu
const hamNavButton = document.getElementById('hamNavButton');
const navList = document.querySelector('.navList');

hamNavButton.addEventListener('click', mobileMenu);
function mobileMenu() {
  if (navList.className === 'navList') {
    navList.className = 'navList navListOpen';
  } else {
    navList.className = 'navList';
    if (subMenu.className === 'subMenu subMenuOpen') {
      subMenu.className = 'subMenu';
      projectsButton.style.color = '#111';
      projectsButton.style.backgroundColor = '#fe0';
    }
  }
}

// Dropdown Menu
const projectsButton = document.querySelector('#projects button');
projectsButton.addEventListener('click', dropDown);
const x = window.matchMedia('(max-width:768px)');
function dropDown(e) {
  if (subMenu.className === 'subMenu') {
    subMenu.className = 'subMenu subMenuOpen';
    navList.className = 'navList navListOpen navListOpenSub';
    if (x.matches) {
      projectsButton.style.color = '#fe0';
      projectsButton.style.backgroundColor = '#111';
    }
  } else if (subMenu.className === 'subMenu subMenuOpen') {
    subMenu.className = 'subMenu';
    navList.className = 'navList navListOpen';
    if (x.matches) {
      projectsButton.style.color = '#111';
      projectsButton.style.backgroundColor = '#fe0';
    }
  }
  e.preventDefault();
}
