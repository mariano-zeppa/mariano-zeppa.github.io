document.addEventListener('DOMContentLoaded', startGame);

// Define your `board` object here!
var board = {
  cells: [
          {
            row: 1,
            col: 1,
            isMine: false,
            hidden: true



          },
          {
            row: 1,
            col: 2,
            isMine: false,
            hidden: true


          },
          {
            row: 1,
            col: 3,
            isMine: true,
            hidden: true


          },
          {
            row: 2,
            col: 1,
            isMine: false,
            hidden: true


          },
          {
            row: 2,
            col: 2,
            isMine: false,
            hidden: true


          },
          {
            row: 2,
            col: 3,
            isMine: false,
            hidden: true

          },
          {
            row: 3,
            col: 1,
            isMine: true,
            hidden: true


          },
          {
            row: 3,
            col: 2,
            isMine: false,
            hidden: true


          },
          {
            row: 3,
            col: 3,
            isMine: false,
            hidden: true


          }]
    }

function isMineorNot () {
return  Math.random() < 0.5;
}

function resetBoard () {
var boardNode = document.getElementsByClassName('board')[0]
addListeners(boardNode)
boardNode.style = ''
console.log(boardNode.style);
for (i = 0; i < board.cells.length; i++){
  var celli = board.cells[i]
  celli.surroundingMines = countSurroundingMines(board.cells[i])
  celli.isMine = isMineorNot(board.cells[i])
}
var elem = document.getElementsByClassName('board')[0]
elem.parentNode.removeChild(elem);
boardNode.style = ''
boardNode.style.width = Math.sqrt(board.cells.length) * 85 + 'px'
initBoard()
startGame ()
}
function startGame () {
  // Don't remove this function call: it makes the game work!

  for (i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    board.cells[i].isMine = isMineorNot(board.cells[i])
  }
  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)
  lib.initBoard()
};

// Define this function to look for a win condition:



// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?


function checkForWin () {
// lets check if you win
    for (i = 0; i < board.cells.length; i++){
      if(board.cells[i].isMine === true && board.cells[i].isMarked === true){ // if true then:
      } else if (board.cells[i].hidden === false && board.cells[i].isMine === false ){
        // you = win
      } else return
    }
lib.displayMessage('You win!');
  };


  //return lib.displayMessage('You win!');


//return lib.displayMessage('You win!');




  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.

// function countSurroundingMines1 (cell) {
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//   console.log(surrounding);
//   var count = 0;
//   for (i = 0; i < surrounding.length; i++){
//       if (surrounding[i].isMine === true){
//       count ++;
//     }
//
//    }
//    console.log(count);
//     return count;
// };

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  return surrounding.filter(function (adjacentCell) {
    return adjacentCell.isMine
    console.log(count);
  }).length;
};


  //return numnber of ceels with the property isMine true
