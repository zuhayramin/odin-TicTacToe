const gameBoard = {
    grid: [
        ["", "", ""], // first row
        ["", "", ""], // second row
        ["", "", ""], // third row
    ],
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

function makePlayer(playerName) {
    handle = playerName
    return function player(playerSign) {
        sign = playerSign
        return { handle, sign }
    }
}

const gameController = function () {
    console.log("Welcome to Tic Tac Toe")
    // Create Player 1
    let nameOfPlayer1 = makePlayer("Player 1")
    let player1 = nameOfPlayer1("X")

    // Create Player 2
    let nameOfPlayer2 = makePlayer("Player 2")
    let player2 = nameOfPlayer1("O")
    console.log(player1)
    console.log(player2)
}

gameController()
