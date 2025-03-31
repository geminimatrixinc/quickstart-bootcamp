const board = document.getElementById("board");
let currentPlayer = "X";
let cells = [];

// Create the board dynamically
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;

    cell.addEventListener("click", () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });

    board.appendChild(cell);
    cells.push(cell);
}
