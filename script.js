/* Script for Tic-Tac-Toe */

const Gameboard = (function() {
    let board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]; 

    const returnBoard = () => {
        return(board);
    }

    const showBoard = () => {
        return console.log(board);
    };

    const changeBoard = (position, player) => {
        if (position > 9) {
            return console.log("INVALID INPUT");
        }
        if (board[position - 1] != "_") {
            return console.log("TAKEN"); 
        }
        board[position-1] = player;
        showBoard();
        if (Winner.checkBoard(position - 1)) {
            console.log(board[position - 1] + " wins!");
            game = false;
            resetBoard();
        }
        return;
    };

    const resetBoard = () => {
        spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    };

    return {
        returnBoard, showBoard, changeBoard, resetBoard
    };
})();

const Winner = (function() {
    const checkBoard = (lastMove) => {
        let x = Gameboard.returnBoard();
        switch(lastMove) {
            case 0:
                if ((x[0] == x[1]) && (x[0] == x[2])) {
                    return true;
                }
                if ((x[0] == x[3]) && (x[0] == x[6])) {
                    return true;
                }
                if ((x[0] == x[4]) && (x[0] == x[8])) {
                    return true;
                }
                return false;
                break;
            case 1:
                if ((x[1] == x[0]) && (x[1] == x[2])) {
                    return true;
                }
                if ((x[1] == x[4]) && (x[1] == x[7])) {
                    return true;
                }
                return false;
                break;
            case 2:
                if ((x[2] == x[0]) && (x[2] == x[1])) {
                    return true;
                }
                if ((x[2] == x[5]) && (x[2] == x[8])) {
                    return true;
                }
                if ((x[2] == x[4]) && (x[2] == x[6])) {
                    return true;
                }
                return false;
                break;
            case 3:
                if ((x[3] == x[0]) && (x[3] == x[6])) {
                    return true;
                }
                if ((x[3] == x[4]) && (x[3] == x[5])) {
                    return true;
                }
                return false;
                break;
            case 4:
                if ((x[4] == x[0]) && (x[4] == x[8])) {
                    return true;
                }
                if ((x[4] == x[1]) && (x[4] == x[7])) {
                    return true;
                }
                if ((x[4] == x[2]) && (x[4] == x[6])) {
                    return true;
                }
                if ((x[4] == x[3]) && (x[4] == x[5])) {
                    return true;
                }
                else return false;
                break;
            case 5:
                if ((x[5] == x[2]) && (x[5] == x[8])) {
                    return true;
                }
                if ((x[5] == x[3]) && (x[5] == x[4])) {
                    return true;
                }
                return false;
                break;
            case 6:
                if ((x[6] == x[0]) && (x[6] == x[3])) {
                    return true;
                }
                if ((x[6] == x[2]) && (x[6] == x[4])) {
                    return true;
                }
                if ((x[6] == x[7]) && (x[6] == x[8])) {
                    return true;
                }
                return false;
                break;
            case 7:
                if ((x[7] == x[1]) && (x[7] == x[4])) {
                    return true;
                }
                if ((x[7] == x[6]) && (x[7] == x[8])) {
                    return true;
                }
                return false;
                break;
            case 8:
                if ((x[8] == x[2]) && (x[8] == x[5])) {
                    return true;
                }
                if ((x[8] == x[0]) && (x[8] == x[4])) {
                    return true;
                }
                if ((x[8] == x[6]) && (x[8] == x[7])) {
                    return true;
                }
                return false;
                break;
            default:
              return console.log("ERROR on switch");
          }
    };

    return {
        checkBoard
    };
})();

function newPlayer (name) {
    const player = name;

    const play = (position) => {
        return Gameboard.changeBoard(position, player);
    };

    return {
        play
    };
}

// 0, 1, 2 
// 3, 4, 5 
// 6, 7, 8 

const p1 = newPlayer("O");
const p2 = newPlayer("X");

function popRandom(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr.splice(randomIndex, 1)[0];
  }
  
  // Example usage:
  let game = true;

  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (spaces) {
    if (game) {
        p1.play(popRandom(spaces));
        p2.play(popRandom(spaces));
    } else {
        continue;
    }
  }