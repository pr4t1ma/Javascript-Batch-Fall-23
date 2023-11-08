let turnCount = 0;
let currentTurn = 'x';
document.getElementById('turn').innerText = currentTurn;
const board = [
  ['EMPTY', 'EMPTY', 'EMPTY'],
  ['EMPTY', 'EMPTY', 'EMPTY'],
  ['EMPTY', 'EMPTY', 'EMPTY'],
];

function clickHandler(t, row, col) {
  // populate board
  t.innerText = currentTurn;
  board[row][col] = currentTurn;

  console.log(board);
  // Ternery operator "?" ":"
  // variable = condition ? "ifVal" : "elseVal"
  // currentTurn = currentTurn === "x" ? "O" : "x";

  // Conditional with if() {} else {}
  // if(condtions) {
  //      variable = "ifVal";
  // } else {
  //     variable = "elseVal";
  // }

  // change turn
  if (currentTurn === 'x') {
    currentTurn = 'o';
  } else {
    currentTurn = 'x';
  }

  document.getElementById('turn').innerText = currentTurn;

  // count turn
  turnCount++;
  if (turnCount > 4) {
    checkWinner();
  }
}

function checkWinner() {
  let noWin = false;
  // check row
  if (
    board[0][0] !== 'EMPTY' &&
    board[0][0] === board[0][1] &&
    board[0][1] === board[0][2]
  ) {
    document.getElementById('game').classList.add('winner-r-0');
  } else if (
    board[1][0] !== 'EMPTY' &&
    board[1][0] === board[1][1] &&
    board[1][1] === board[1][2]
  ) {
    document.getElementById('game').classList.add('winner-r-1');
  } else if (
    board[2][0] !== 'EMPTY' &&
    board[2][0] === board[2][1] &&
    board[2][1] === board[2][2]
  ) {
    document.getElementById('game').classList.add('winner-r-2');
  } else if (
    // check col
    board[0][0] !== 'EMPTY' &&
    board[0][0] === board[1][0] &&
    board[1][0] === board[2][0]
  ) {
    document.getElementById('game').classList.add('winner-c-0');
  } else if (
    board[0][1] !== 'EMPTY' &&
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1]
  ) {
    document.getElementById('game').classList.add('winner-c-1');
  } else if (
    board[0][2] !== 'EMPTY' &&
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2]
  ) {
    document.getElementById('game').classList.add('winner-c-2');
  } else if (
    board[0][0] !== 'EMPTY' &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    document.getElementById('game').classList.add('winner-d-1');
  } else if (
    board[0][2] !== 'EMPTY' &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    document.getElementById('game').classList.add('winner-d-2');
  } else {
    noWin = true;
  }
  if (!noWin) {
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    setTimeout(shoot, 500);
    setTimeout(shoot, 1000);
    setTimeout(shoot, 2000);
    setTimeout(shoot, 5000);
  }
}

const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 30,
    scalar: 1.2,
    shapes: ['circle', 'square'],
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  });

  confetti({
    ...defaults,
    particleCount: 20,
    scalar: 2,
    shapes: ['text'],
    shapeOptions: {
      text: {
        value: ['🦄', '🌈'],
      },
    },
  });
}
