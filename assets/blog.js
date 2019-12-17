// JS for SEO Blog

//change dark theme
const darkButton = document.getElementById('darkButton');
const darkStatus = document.getElementById('darkStatus');
const body = document.getElementById('body');
const aboutHeading = document.getElementById('aboutHeading');
darkButton.addEventListener('click', changeTheme);
function changeTheme() {
  if (darkStatus.textContent === 'OFF') {
    darkButton.style.color = '#fe0';
    darkButton.style.backgroundColor = '#111';
    darkStatus.textContent = 'ON';
    body.style.color = '#fff';
    body.style.backgroundColor = '#222';
    aboutHeading.style.borderBottomColor = '#fff';
  } else {
    darkButton.style.color = '#111';
    darkButton.style.backgroundColor = '#fe0';
    darkStatus.textContent = 'OFF';
    body.style.color = '#000';
    body.style.backgroundColor = '#fff';
    aboutHeading.style.borderBottomColor = '#000';
  }
  //   For SpecialBox
  document.getElementById('specialBox').style.color = '#111';
}

// Poll Result
const poll = document.getElementById('poll');
poll.addEventListener('click', result);
function result(e) {
  if (e.target.id === 'o2') {
    e.target.style.color = '#fff';
    e.target.style.backgroundColor = 'green';
  } else {
    e.target.style.color = '#fff';
    e.target.style.backgroundColor = 'red';
  }
  e.preventDefault();
  poll.removeEventListener('click', result);
}
