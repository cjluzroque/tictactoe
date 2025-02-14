/* Script for Tic-Tac-Toe */

// Winning Combinations 
// x, x, x, n, n, n, n, n, n 
// n, n, n, x, x, x, n, n, n 
// n, n, n, n, n, n, x, x, x 
// x, n, n, x, n, n, x, n, n 
// n, x, n, n, x, n, n, x, n 
// n, n, x, n, n, x, n, n, x 
// x, n, n, n, x, n, n, n, x 
// n, n, x, n, x, n, x, n, n 

const Gameboard = (function() {
    let board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]; 

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
        return;
    };

    const resetBoard = () => {
        return (board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    };

    return {
        showBoard, changeBoard, resetBoard
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

const p1 = newPlayer("O");
const p2 = newPlayer("X");
p1.play(2);