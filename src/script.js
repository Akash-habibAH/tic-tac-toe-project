let boxesArray = document.querySelectorAll(".boxes");
let turnOfX = true;
let winner = null;
let messageBox = document.getElementById("messageBox");
let XBox = document.getElementById("Xscore");
let OBox = document.getElementById("Oscore");
let scoreOfX = document.getElementById("scoreX").innerText;
scoreOfX = parseInt(scoreOfX);
let scoreOfO = document.getElementById("scoreO").innerText;
scoreOfO = parseInt(scoreOfO);
let dispalyWhoseTurn = document.getElementById("tellWhoseTurn");
// Function to check winner
function decision() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let someoneWon = false;
    winPatterns.forEach(pattern => {
        let [a, b, c] = pattern;
        if (
            boxesArray[a].innerText !== "" &&
            boxesArray[a].innerText === boxesArray[b].innerText &&
            boxesArray[b].innerText === boxesArray[c].innerText
        ) {
            someoneWon = true;
            winner = boxesArray[a].innerText;
            displayWinner(winner);

            if (winner == "X") {
                scoreOfX++;
                document.getElementById("scoreX").innerText = scoreOfX;
            }
            if (winner == "O") {
                scoreOfO++;
                document.getElementById("scoreO").innerText = scoreOfO;
            }
        }
    });
    //now check match is drawn or not
    if (!someoneWon && Array.from(boxesArray).every(box => box.innerText !== "")) {
        messageBox.innerText = "MATCH DRAW!";
    }
}
// Function to display winner
function displayWinner(winner) {
    messageBox.innerText = `CONGRATULATIONS! ${winner} is the winner!`;
}
// Add click event listener to all boxes
boxesArray.forEach(box => {
    box.addEventListener("click", writingFunction);
});
// Reset button
document.getElementById("resetButton").addEventListener("click", () => {
    boxesArray.forEach(box => (box.innerText = ""));
    turnOfX = true;
    winner = null;
    messageBox.innerText = "DECISION PENDING!";
});
// Function to write X or O on click
function writingFunction(e) {
    if (e.target.innerText === "" && !winner) {
        e.target.innerText = turnOfX ? "X" : "O";
        turnOfX = !turnOfX;
        if (turnOfX == false) {
            dispalyWhoseTurn.innerText = `O's Turn`;
        }
        else{
            dispalyWhoseTurn.innerText = `X's Turn`;
        }
        decision();
    }
}