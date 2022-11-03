function ticTacToe(input) {
    let playerOneX = [];
    let playerTwo0 = [];
    let matrix =
        [[false, 'X', 'X'],
        [false, false, false],
        [false, false, false]];
    let row = 0;
    let col = 0;
    
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        row = Number(command[0]);
        col = Number(command[1]);

        if (!(isEmptyPozition(matrix, row, col))) {
            continue;
        }
        matrix[row][col] = 'X';
        if (isRowEqual(matrix, row, col)) {
            console.log('Player X wins!');
        }
        if (isColEqual(matrix, row)) {
            return 'Player X wins!';
        }
        console.table(matrix);

    }
        
    
    
    
    
}
function isEmptyPozition(matrix, row, col) {
    let isEmptyPosition = true;
    if (matrix[row][col] != 'false') {
        console.log('This place is already taken. Please choose another!');
        return isEmptyPosition = false;
    }
    return isEmptyPosition;
}
    function isColEqual(matrix, row) {
        const equalCol = matrix.reduce(matrix, row) = x.map(x => x[row]);
        let isEqualCol = true;
        for (let i = 0; i < equal.length - 1; i++) {
            if (equal[i] !== equal[i + 1]) {
                return isColEqual = false;
            }
        }
        return isColEqual;
}

    function isRowEqual(matrix, row, col) {
        const equalRow = [];
        let isEqualRow = true;
        for (let i = 0; i < matrix[row].length - 1; i++) {
            if ((matrix[row][i] === matrix[row][i + 1] && matrix[row[i] === 'X'])) {
                return isEqualRow = false;
            }
        }
        return isEqualRow;
    }

ticTacToe([
  "0 0",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);