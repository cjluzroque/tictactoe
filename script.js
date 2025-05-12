/* Script for Tic-Tac-Toe */

const Gameboard = (function() {
    let board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]; 

    const returnBoard = () => {
        console.log(board);
        return(board);
    }

    const changeBoard = (position, player) => {
        if (position > 9) {
            return console.log("INVALID INPUT");
        }
        if (board[position - 1] != "_") {
            return console.log("TAKEN"); 
        }
        board[position-1] = player;
        returnBoard();
        if (Winner.checkBoard(position - 1)) {
            console.log(board[position - 1] + " wins!");
            game = false;
            resetBoard();
            return;
        }
        if (boardSpace() == false) {
            console.log("DRAW!");
            game = false;
            resetBoard();
        }
        return;
    };

    const boardSpace = () => {
        return(board.includes('_'))
    }

    const resetBoard = () => {
        return (board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    };

    return {
        returnBoard, changeBoard, boardSpace, resetBoard
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

// UI Handling
const renderBoard = (function() {

    const board = document.querySelector('#container');
    board.classList.add("gameboard");

    

    const createBoard = () => {

        // GRID CREATION
        // Create Row 
        for (i = 0; i < 9; i++) {
            // Make a div to append each box to be a row 
            const space = document.createElement("div");
            space.classList.add("space");
            space.classList.add("space"+i);

            // Append to grid 
            board.appendChild(space);
        }

        return;
    }

    const updateBoard = (position) => {
        const space = document.querySelector('.space'+position);
        space.classList.add("changedspace");
        return;
    }

    const resetBoard = () => {
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }
        return;
    }

    return {
        createBoard, updateBoard, resetBoard
    }
})();

function newPlayer (name) {
    const player = name;

    //This function can act when a box is clicked
    const targets = document.querySelectorAll('.space');
    targets.forEach(target => {
        target.addEventListener("click", function () {
            console.log("test " + player);
        });
    });

    const play = (position) => {
        Gameboard.changeBoard(position, player);
        renderBoard.updateBoard(position-1);
        return;
    };

    return {
        play
    };
}

// 0, 1, 2 
// 3, 4, 5 
// 6, 7, 8 






// Testing game 
let game = true;
function gameStart() {

    const p1 = newPlayer("O");
    const p2 = newPlayer("X");

    function popRandom(arr) {
        if (arr.length === 0) {
          return undefined;
        }
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr.splice(randomIndex, 1)[0];
    }
    
    game = true;
    const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    while (game) {
        if (Gameboard.boardSpace()) {
            p1.play(popRandom(spaces));
        }
        if (Gameboard.boardSpace() && game) {
            p2.play(popRandom(spaces));
        }
    }
    return;
}
