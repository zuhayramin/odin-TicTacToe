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

gameBoard.display()
