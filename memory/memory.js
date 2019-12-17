// JS for Memory Game

const gameArea = document.getElementById('gameArea');
const finalResult = document.getElementById('finalResult');
const totalMoves = document.getElementById('totalMoves');
const movesCount = document.getElementById('movesCount');

//local Storage for High Score Count
const highScoreCount = document.getElementById('highScoreCount');
function updateHighScore(moves) {
  // Check if local storage is set or not
  if (localStorage.getItem('highScore') === null) {
    localStorage.setItem('highScore', 'NA');
  }
  // Check if we need to update high score
  else if (
    moves <= localStorage.getItem('highScore') ||
    localStorage.getItem('highScore') === 'NA'
  ) {
    localStorage.setItem('highScore', moves);
    finalResult.innerHTML += '<p> and this is a New High Score </p>';
  }
  highScoreCount.innerHTML = localStorage.getItem('highScore');
}
updateHighScore(localStorage.getItem('highScore'));

//Don't show total Moves
totalMoves.style.display = 'none';
//Hide Results
finalResult.style.display = 'none';

// StartGame
const startGameButton = document.getElementById('startGameButton');
startGameButton.addEventListener('click', playGame);
function playGame() {
  //Hide Results
  finalResult.style.display = 'none';

  //Check Success
  function checkSuccess() {
    if (successCombos === 6) {
      gameArea.innerHTML = '';
      finalResult.innerHTML = `You Won in ${moves} moves`;
      finalResult.style.display = 'block';
      updateHighScore(moves);
    }
  }

  //Show total Moves
  totalMoves.style.display = 'inline';
  let moves = 0; //this is variable for counting moves in js file
  //Update moves count number
  function movesCountUpdate() {
    moves++;
    if (moves < 10) {
      movesCount.innerHTML = '0' + moves;
    } else {
      movesCount.innerHTML = moves;
    }
  }
  movesCount.innerHTML = '00';
  //startGame Button back to New Game
  startGameButton.innerHTML = 'NEW Game';
  //RestartGame
  startGameButton.addEventListener('click', restartGame);
  function restartGame() {
    gameArea.innerHTML = '';
    playGame();
  }

  //Types of card Array
  let cardsClassArray = [
    'fas fa-tree',
    'fas fa-tree',
    'fas fa-car',
    'fas fa-car',
    'fas fa-anchor',
    'fas fa-anchor',
    'fab fa-apple',
    'fab fa-apple',
    'fab fa-google',
    'fab fa-google',
    'fas fa-mug-hot',
    'fas fa-mug-hot'
  ];
  let totalCards = 12;

  //All Cards
  let cards = [];

  // Creating Cards
  for (let i = 1; i <= 12; i++) {
    cards[i] = document.createElement('div');
    cards[i].className = 'card';
    cards[i].id = `card${i}`;

    //  Choosing Random Card
    let randomNo = Math.floor(Math.random() * totalCards);
    cardClass = cardsClassArray[randomNo];
    cardsClassArray.splice(cardsClassArray.indexOf(`${cardClass}`), 1);
    totalCards--;

    cards[
      i
    ].innerHTML = `<div class="innerCard"> <div class="front"></div> <div class="back"><i class="${cardClass}"></i></div> </div>`;
    gameArea.appendChild(cards[i]);

    //To Show Cards Initially
    setTimeout(() => {
      cards[i].firstChild.style.transform = 'rotateY(180deg)';
    }, 1000);
    setTimeout(() => {
      cards[i].firstChild.style.transform = 'rotateY(0deg)';
    }, 4000);
  }

  window.scrollBy(0, 500);

  //   Main Game Rule
  let openCards = []; //2 cards which are open
  let disabledCards = []; // cards which are successfully openend
  let successCombos = 0; //0 to 6

  //To Start Game after cards are flipped
  setTimeout(() => {
    gameArea.addEventListener('click', mainGame);
  }, 5000);

  function mainGame(e) {
    //Rotate the Card
    //Check if card is disabled
    if (
      e.target.parentElement.className === 'innerCard' &&
      disabledCards.indexOf(e.target.parentElement.parentElement.id) === -1
    ) {
      //Increment Total Moves
      movesCountUpdate();
      //Rotate the Card
      e.target.parentElement.style.transform = 'rotateY(-180deg)';
      //Check if first open card of 2
      if (openCards.length === 0) {
        openCards[0] = e.target.nextElementSibling.firstChild;
        //Check if second open card of 2
      } else if (openCards.length === 1) {
        openCards[1] = e.target.nextElementSibling.firstChild;
        //If Same
        if (openCards[0].className === openCards[1].className) {
          //Add both cards to disabled cards
          disabledCards.push(
            openCards[0].parentElement.parentElement.parentElement.id
          );
          disabledCards.push(
            openCards[1].parentElement.parentElement.parentElement.id
          );
          //Increment success Combos by 1
          successCombos++;
          //Check if we won or not
          checkSuccess();
          //Open Cards ar now 0
          openCards = [];
        }
        //If Different
        else {
          //Roatate to front
          setTimeout(() => {
            openCards[0].parentElement.parentElement.style.transform =
              'rotateY(0deg)';
            openCards[1].parentElement.parentElement.style.transform =
              'rotateY(0deg)';
            //Open Cards ar now 0
            openCards = [];
          }, 700);
        }
      }
    }
  }
}
