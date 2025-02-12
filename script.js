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

const testModule = (function() {
    let test = "This is firing"; 

    const sayTest = () => {
        return console.log(test);
    };

    const changeTest = (value) => {
        return (test = value);
    }

    return {
        sayTest, changeTest
    }
})();

const gameBoard = (function() {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; 

    const showBoard = () => {
        return console.log(board);
    };

    const changeBoard = (value, player) => {
        if (value > 9) {
            return console.log("INVALID INPUT");
        }
        if (board[value - 1] != 0) {
            return console.log("TAKEN"); 
        }
        return (board[value-1] = player);
    };

    const resetBoard = () => {
        return (board = [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    };

    return {
        showBoard, changeBoard, resetBoard
    };
})();
