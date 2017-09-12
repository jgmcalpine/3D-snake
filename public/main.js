const store = {
  apple: { top: 0, left: 0 },
  head: { top: 0, left: 0 },
  speed: 300,
  currentDirection: 'down',
  gameOver: false,
  score: 0,
  body: [],
  bodyPartId: 0,
  topScore: 0,
}

const newGame = () => {
  const apple = new Apple();
  const head = new Head();
};

const board = document.querySelector('#board');
const container = document.querySelector('#container');

const initializeKeys = () => {
  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 40 && store.currentDirection !== 'up') {
      e.preventDefault();
      store.currentDirection = 'down';
    } else if (e.keyCode === 39 && store.currentDirection !== 'left') {
      e.preventDefault();
      store.currentDirection = 'right';
    } else if (e.keyCode === 38 && store.currentDirection !== 'down') {
      e.preventDefault();
      store.currentDirection = 'up';
    } else if (e.keyCode === 37 && store.currentDirection !== 'right') {
      e.preventDefault();
      store.currentDirection = 'left';
    } else if (e.keyCode === 32 && store.gameOver) {
      e.preventDefault();
      resetBoard();
    }
  });
};