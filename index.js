const gameBoard = (function () {
    // Private variables or functions can be declared here

    const grid = ["", "", "", "", "", "", "", "", ""]

    function boardCells() {
        const boardContainer = document.querySelector(".board-container")
        return boardContainer
    }

    // Adds cells to game board in DOM
    function addCells() {
        const container = boardCells()

        for (let i = 0; i < 9; i++) {
            const newCell = document.createElement("div")
            newCell.classList.add("cell")
            newCell.id = i
            newCell.innerText = grid[i]
            console.log(newCell.id)
            container.appendChild(newCell)
        }
    }

    function removeCells() {
        const container = boardCells()
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
    }

    // Public methods or variables (accessible from the outside)
    return {
        grid: grid,
        addCells: addCells,
        boardCells: boardCells,
        removeCells: removeCells,
    }
})()

// Now, gameBoard is an object with properties and methods
console.log(gameBoard.grid) // Access grid property
gameBoard.addCells() // Invoke addCells method

const makePlayer = (name, sign) => {
    return { name, sign }
}

function checkWinningCombos(grid) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        const startIndex = i * 3
        if (
            grid[startIndex] !== "" &&
            grid[startIndex] === grid[startIndex + 1] &&
            grid[startIndex] === grid[startIndex + 2]
        ) {
            return true
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (
            grid[i] !== "" &&
            grid[i] === grid[i + 3] &&
            grid[i] === grid[i + 6]
        ) {
            return true
        }
    }

    // Check diagonals
    if (grid[0] !== "" && grid[0] === grid[4] && grid[0] === grid[8]) {
        return true
    }
    if (grid[2] !== "" && grid[2] === grid[4] && grid[2] === grid[6]) {
        return true
    }

    // No winning combination found
    return false
}

const gameController = function () {
    // Spaces to improve readability in console
    console.log("\nWelcome to Tic Tac Toe\n")

    // Create Player 1
    let player1 = makePlayer("Player 1", "X")

    // Create Player 2
    let player2 = makePlayer("Player 2", "O")

    // Set active player
    let activePlayer = player1

    const container = gameBoard.boardCells().childNodes

    // Add event listener to each cell
    container.forEach((cell) => {
        cell.addEventListener("click", handlePlayerMove)
    })

    // Function to handle player moves
    function handlePlayerMove() {
        if (gameBoard.grid[this.id] === "") {
            this.innerText = activePlayer.sign
            gameBoard.grid[this.id] = activePlayer.sign

            if (checkWinningCombos(gameBoard.grid)) {
                container.forEach((cell) => {
                    cell.removeEventListener("click", handlePlayerMove)
                })

                alert(`${activePlayer.name} wins!`)
                // Additional logic for game end, reset, or other actions
            } else {
                // Switch active player for the next move
                activePlayer = activePlayer === player1 ? player2 : player1
                console.log(`It is ${activePlayer.name}'s move now!`)
                const playerMove = document.querySelector(".player-move")
                playerMove.innerText = `It is ${activePlayer.name}'s move!`
            }
        }
    }

    // Restart game functionality
    const restartBtn = document.querySelector(".restart-btn")

    restartBtn.addEventListener("click", restartGame)

    function restartGame() {
        console.log("Restart")
        gameBoard.grid = ["", "", "", "", "", "", "", "", ""]
        container.forEach((cell) => {
            cell.innerText = ""
            cell.removeEventListener("click", handlePlayerMove)
        })
        gameController()
    }
}

gameController()
