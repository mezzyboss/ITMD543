// Initial Sudoku boards
const easyBoard = [
    [null, 2, null],
    [3, null, null],
    [null, null, 1]
];

const hardBoard = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9]
];

function createBoard(board, containerId) {
    const boardContainer = document.getElementById(containerId);
    boardContainer.innerHTML = '';
    const size = board.length;
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.contentEditable = true;
            cell.textContent = board[row][col] ? board[row][col] : '';
            boardContainer.appendChild(cell);
        }
    }
}

function isValid(board, row, col, num) {
    // Check row and column
    for (let i = 0; i < board.length; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }
    // Check 3x3 sub-grid
    const subGridSize = Math.sqrt(board.length);
    const startRow = row - row % subGridSize;
    const startCol = col - col % subGridSize;
    for (let i = startRow; i < startRow + subGridSize; i++) {
        for (let j = startCol; j < startCol + subGridSize; j++) {
            if (board[i][j] === num) {
                return false;
            }
        }
    }
    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            if (board[row][col] === null) {
                for (let num = 1; num <= board.length; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = null;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

document.getElementById('solveEasy').addEventListener('click', () => {
    solveSudoku(easyBoard);
    createBoard(easyBoard, 'easy-board');
});

document.getElementById('solveHard').addEventListener('click', () => {
    solveSudoku(hardBoard);
    createBoard(hardBoard, 'hard-board');
});

createBoard(easyBoard, 'easy-board');
createBoard(hardBoard, 'hard-board');
