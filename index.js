function makePlayer(playerName) {
    handle = playerName
    return function player(playerSign) {
        sign = playerSign
        return { handle, sign }
    }
}

function checkWinningCombos(grid) {
    for (let i = 0; i < 3; i++) {
        if (
            grid[i][0] !== "" &&
            grid[i][0] === grid[i][1] &&
            grid[i][0] === grid[i][2]
        ) {
            return true
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (
            grid[0][i] !== "" &&
            grid[0][i] === grid[1][i] &&
            grid[0][i] === grid[2][i]
        ) {
            return true
        }
    }

    // Check diagonals
    if (
        grid[0][0] !== "" &&
        grid[0][0] === grid[1][1] &&
        grid[0][0] === grid[2][2]
    ) {
        return true
    }
    if (
        grid[0][2] !== "" &&
        grid[0][2] === grid[1][1] &&
        grid[0][2] === grid[2][0]
    ) {
        return true
    }

    // No winning combination found
    return false
}

const gameController = function () {
    // Spaces to improve readability in console
    console.log("\nWelcome to Tic Tac Toe\n")

    // Create gameboard
    const gameBoard = {
        grid: [
            ["X", "X", "X"], // first row
            ["", "", ""], // second row
            ["", "", ""], // third row
        ],
        // Prints gameboard in console
        // Will be updated to display board in DOM
        display: function () {
            for (let row = 0; row < 3; row++) {
                // loops over each row
                console.log(
                    ` ${this.grid[row][0]} | ${this.grid[row][1]} | ${this.grid[row][2]} `
                )
                // prints a separator line
                if (row < 2) {
                    console.log("---------")
                }
            }
        },
    }

    // Create Player 1
    let nameOfPlayer1 = makePlayer("Player 1")
    let player1 = nameOfPlayer1("X")

    // Create Player 2
    let nameOfPlayer2 = makePlayer("Player 2")
    let player2 = nameOfPlayer2("O")

    let activePlayer = player1

    if (checkWinningCombos(gameBoard.grid)) {
        console.log("Gameover")
    }

    gameBoard.display()
    // console.log(
    //     "\nIt is Player 1's move! Choose a box by indicating the column and row number: "
    // )
}

gameController()
