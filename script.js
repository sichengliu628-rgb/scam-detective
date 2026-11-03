/ Scam Detective Game
// Created by Gary

// Start the game
function startGame() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("result").style.display = "none";
}

// Check player's answer
function checkAnswer(answer) {
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "block";

    if (answer === "scam") {
        document.getElementById("resultTitle").innerText =
            "🎉 Correct! This is a SCAM!";
    } else {
        document.getElementById("resultTitle").innerText =
            "💡 Not quite! This is a SCAM.";
    }
}

// Restart the game
function restartGame() {
    document.getElementById("result").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("welcome").style.display = "block";
}
