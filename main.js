const cells = document.querySelectorAll(".cell");
let turn = "X"

cells.forEach(cell => {
    cell.addEventListener("click", function() {
        if (cell.innerHTML == "X" || cell.innerHTML == "O") {
            return
        } else {
            cell.innerHTML = turn
            if (turn == "X") {
                turn = "O"
            } else {
                turn = "X"
            }
        }
    })
})

function checkWinner() {
    
}