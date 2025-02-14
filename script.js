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
            resetBoard();
        }
        return;
    };

    const resetBoard = () => {
        return (board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    };

    return {
        returnBoard, showBoard, changeBoard, resetBoard
    };
})();

const Winner = (function() {
    // Winning Combinations 
    // 0, 1, 2 
    // 3, 4, 5 
    // 6, 7, 8 
    // x, x, x, n, n, n, n, n, n 
    // n, n, n, x, x, x, n, n, n 
    // n, n, n, n, n, n, x, x, x 
    // x, n, n, x, n, n, x, n, n 
    // n, x, n, n, x, n, n, x, n 
    // n, n, x, n, n, x, n, n, x 
    // x, n, n, n, x, n, n, n, x 
    // n, n, x, n, x, n, x, n, n 

    const checkBoard = (lastMove) => {
        board = Gameboard.returnBoard();
        switch(lastMove) {
            case 0:
                if ((board[0] == board[1]) && (board[0] == board[2])) {
                    return true;
                }
                if ((board[0] == board[3]) && (board[0] == board[6])) {
                    return true;
                }
                if ((board[0] == board[4]) && (board[0] == board[8])) {
                    return true;
                }
                return false;
                break;
            case 1:
                if ((board[1] == board[0]) && (board[1] == board[2])) {
                    return true;
                }
                if ((board[1] == board[4]) && (board[1] == board[7])) {
                    return true;
                }
                return false;
                break;
            case 2:
                if ((board[2] == board[0]) && (board[2] == board[1])) {
                    return true;
                }
                if ((board[2] == board[5]) && (board[2] == board[8])) {
                    return true;
                }
                if ((board[2] == board[4]) && (board[2] == board[6])) {
                    return true;
                }
                return false;
                break;
            case 3:
                if ((board[3] == board[0]) && (board[3] == board[6])) {
                    return true;
                }
                if ((board[3] == board[4]) && (board[3] == board[5])) {
                    return true;
                }
                return false;
                break;
            case 4:
                if ((board[4] == board[0]) && (board[4] == board[8])) {
                    return true;
                }
                if ((board[4] == board[1]) && (board[4] == board[7])) {
                    return true;
                }
                if ((board[4] == board[2]) && (board[4] == board[6])) {
                    return true;
                }
                if ((board[4] == board[3]) && (board[4] == board[5])) {
                    return true;
                }
                else return false;
                break;
            case 5:
                if ((board[5] == board[2]) && (board[5] == board[8])) {
                    return true;
                }
                if ((board[5] == board[3]) && (board[5] == board[4])) {
                    return true;
                }
                return false;
                break;
            case 6:
                if ((board[6] == board[0]) && (board[6] == board[3])) {
                    return true;
                }
                if ((board[6] == board[2]) && (board[6] == board[4])) {
                    return true;
                }
                if ((board[6] == board[7]) && (board[6] == board[8])) {
                    return true;
                }
                return false;
                break;
            case 7:
                if ((board[7] == board[1]) && (board[7] == board[4])) {
                    return true;
                }
                if ((board[7] == board[6]) && (board[7] == board[8])) {
                    return true;
                }
                return false;
                break;
            case 8:
                if ((board[8] == board[2]) && (board[8] == board[5])) {
                    return true;
                }
                if ((board[8] == board[0]) && (board[8] == board[4])) {
                    return true;
                }
                if ((board[8] == board[6]) && (board[8] == board[7])) {
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
p1.play(4);
p2.play(8);
p1.play(5);
p2.play(3);
p1.play(1);
p2.play(2);
p1.play(6);