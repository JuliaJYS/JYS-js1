var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;
var NEW_FOOD_TIME = 5000;
var NEW_STONE_TIME = 7500;

var isGameRunning = false;
var snakeTimer;
var snake = [];
var direction = 'x-';

function init() {
  var startButton = document.getElementById('snake-start');
  startButton.addEventListener('click', startGame);

  var renewButton = document.getElementById('snake-renew');
  renewButton.addEventListener('click', refreshGame);

  addEventListener('keydown', changeDirection);

  buildGameField();
}

function buildGameField() {
  var gameTable = document.createElement('table');
  gameTable.classList.add('game-table');

  for(var i = 0; i < FIELD_SIZE_X; i++) {
    var row = document.createElement('tr');
    row.classList.add('game-table-row');

    for(var j = 0; j < FIELD_SIZE_Y; j++) {
      var cell = document.createElement('td');
      cell.classList.add('game-table-cell');
      cell.classList.add('cell-' + i + "-" + j);

      row.appendChild(cell);
    }
    gameTable.appendChild(row);
  }

  document.getElementById('snake-field').appendChild(gameTable);
}

function changeDirection(event) {
  switch (event.keyCode) {
    case 37:
      if(direction != 'y+') {
        direction = 'y-';
      }
      break;
    case 38:
      if(direction != 'x+') {
        direction = 'x-';
      }
      break;
    case 39:
      if(direction != 'y-') {
        direction = 'y+';
      }
      break;
    case 40:
      if(direction != 'x-') {
        direction = 'x+';
      }
      break;

  }
}

function startGame() {
  isGameRunning = true;
  respawn();

  snakeTimer = setInterval(move, SNAKE_SPEED);
  //вот тут добавила проверку, чтобы еда не создавалась, если игра завершилась
  if (isGameRunning == true) {
    setTimeout(createFood, NEW_FOOD_TIME);
    setTimeout(createStone,NEW_STONE_TIME);
  }
}

function respawn() {
  var startCoordX = Math.floor(FIELD_SIZE_X / 2);
  var startCoordY = Math.floor(FIELD_SIZE_Y / 2);

  var snakeHead = document.getElementsByClassName('cell-' + startCoordX + '-' + startCoordY)[0];
  snakeHead.classList.add('snake-unit');

  var snakeTail = document.getElementsByClassName('cell-' + (startCoordX - 1) + '-' + startCoordY)[0];

  snakeTail.classList.add('snake-unit');

  snake = [];

  snake.push(snakeHead);
  snake.push(snakeTail);
}

function move() {
  var snakeHeadClasses = snake[snake.length - 1].classList;

  var newUnit;
  var snakeCoords = snakeHeadClasses[1].split('-');
  var coordX = parseInt(snakeCoords[1]);
  var coordY = parseInt(snakeCoords[2]);

  switch(direction) {
    case 'x-':
      newUnit = document.getElementsByClassName('cell-' + (transerSnake(coordX) - 1) + '-' + coordY)[0];
      break;
    case 'x+':
      newUnit = document.getElementsByClassName('cell-' + transerSnake(coordX + 1) + '-' + coordY)[0];
      break;
    case 'y-':
      newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (transerSnake(coordY) - 1))[0];
      break;
    case 'y+':
      newUnit = document.getElementsByClassName('cell-' + coordX + '-' + transerSnake(coordY + 1))[0];
      break;
  }
  

  if(newUnit !== undefined) {
    if(!newUnit.classList.contains('snake-unit') && !newUnit.classList.contains('stone-unit')) {
      newUnit.classList.add('snake-unit');
      snake.push(newUnit);
      scoreSum();

      if(!newUnit.classList.contains('food-unit')) {
        var removed = snake.splice(0, 1)[0];
        removed.classList.remove('snake-unit');      
      } 
      else {
        newUnit.classList.remove('food-unit');
        createFood();
        //не врезались, создаем препятствие
        createStone();
      }          
    }
    else {
      finishGame();    
    }
  }       
}

function createStone() {
  var stoneCreated = false;

  while(!stoneCreated) {
    var stoneX = Math.floor(Math.random() * FIELD_SIZE_X);
    var stoneY = Math.floor(Math.random() * FIELD_SIZE_Y);

    var stoneCell = document.getElementsByClassName('cell-' + stoneX + '-' + stoneY)[0];

    if(!stoneCell.classList.contains('snake-unit') || !stoneCell.classList.contains('food-unit')) {
      stoneCell.classList.add('stone-unit');
      stoneCreated = true;
    }
  }
}

function createFood() {
  var foodCreated = false;

  while(!foodCreated) {
    var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
    var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

    var foodCell = document.getElementsByClassName('cell-' + foodX + '-' + foodY)[0];

    if(!foodCell.classList.contains('snake-unit')) {
      foodCell.classList.add('food-unit');
      foodCreated = true;
    }
  }
}


function finishGame() {
  clearInterval(snakeTimer);
  isGameRunning = false; 
  alert('GAME OVER'); 
}

function refreshGame() {
  location.reload();
}

function scoreSum() {
  //добавляю счет
  var newScore = document.getElementById('score');
  newScore.innerHTML = (snake.length - 3);
}

function transerSnake(coord) {
  //убираю границы поля
  if (coord == 20 ) {
    coord = 0;
  }
  else if (coord == 0 ) {
    coord = 20;
  } 
  return coord;
}

window.onload = init;
