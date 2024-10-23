/*-------------------------------- Constants --------------------------------*/
let boredom = 0;
let hunger = 0;
let sleepiness = 0;
let gameInterval;



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const boredomStat = document.getElementById('boredom-stat');
const hungerStat = document.getElementById('hunger-stat');
const sleepinessStat = document.getElementById('sleepiness-stat');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart');



/*-------------------------------- Functions --------------------------------*/
function initializeGame() {
    boredom = 0;
    hunger = 0;
    sleepiness = 0;
    updateStats();
    startGameInterval();
    message.classList.add('hidden'); 
  }
  function updateStats() {
    boredomStat.innerText = boredom;
    hungerStat.innerText = hunger;
    sleepinessStat.innerText = sleepiness;
  }
  function startGameInterval() {
    gameInterval = setInterval(() => {
      boredom += Math.floor(Math.random() * 4);
      hunger += Math.floor(Math.random() * 4);
      sleepiness += Math.floor(Math.random() * 4);
      checkGameOver();
      updateStats();
    }, 2000); 
  }
  function checkGameOver() {
    if (boredom >= 10 || hunger >= 10 || sleepiness >= 10) {
      clearInterval(gameInterval); 
      message.classList.remove('hidden'); 
    }
  }
  function handleClick(stat) {
    switch (stat) {
      case 'play':
        boredom = 0;
        break;
      case 'feed':
        hunger = 0;
        break;
      case 'sleep':
        sleepiness = 0;
        break;
    }
    updateStats(); 
  }
  function resetGame() {
    initializeGame();
  }
  


/*----------------------------- Event Listeners -----------------------------*/
document.getElementById('play').addEventListener('click', () => handleClick('play'));
document.getElementById('feed').addEventListener('click', () => handleClick('feed'));
document.getElementById('sleep').addEventListener('click', () => handleClick('sleep'));
restartButton.addEventListener('click', resetGame);

initializeGame();


