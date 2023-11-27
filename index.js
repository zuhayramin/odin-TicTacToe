function makeGameboard() {
    const gameBoard = {
        grid: [
            ["", "", ""], // first row
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

    return gameBoard
}

const makePlayer = (name, sign) => {
    return { name, sign }
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

// Function to handle player moves
function handlePlayerMove(board, player) {
    // Function to validate user input
    function isValidMove(row, col) {
        return (
            row >= 0 &&
            row < 3 &&
            col >= 0 &&
            col < 3 &&
            board.grid[row][col] === ""
        )
    }

    // Function to get valid user input
    function getUserMove() {
        let row, col
        do {
            row = parseInt(
                prompt(`Enter the row (0, 1, or 2) for ${player.name}:`)
            )
            col = parseInt(
                prompt(`Enter the column (0, 1, or 2) for ${player.name}:`)
            )
        } while (!isValidMove(row, col))

        return { row, col }
    }

    // Get valid user input
    const { row, col } = getUserMove()

    // Update the board with the player's move
    board.grid[row][col] = player.sign
}

const gameController = function () {
    // Spaces to improve readability in console
    console.log("\nWelcome to Tic Tac Toe\n")

    // Create gameboard
    let board = makeGameboard()

    // Create Player 1
    let player1 = makePlayer("Player 1", "X")

    // Create Player 2
    let player2 = makePlayer("Player 2", "O")

    let activePlayer = player1

    do {
        console.log(activePlayer.name)
        handlePlayerMove(board, activePlayer)
        board.display()
        activePlayer = activePlayer === player1 ? player2 : player1
    } while (!checkWinningCombos(board.grid))
}
