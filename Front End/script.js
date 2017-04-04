function playAudio(audioId) {
    document.getElementById(audioId).play();
}

var hidden = false; // For switching between modes (Used in function below)

function switchMode() {
    if (!hidden) {
        document.getElementById("tableDiv").style.display = "none";
        document.getElementById("quizzes").style.display = "none";
        document.getElementById("quizDiv").style.display = "block";
        document.getElementById("menuButton").style.display = "none";
        document.getElementById("testButton").innerText = "Show Table";
        hidden = true;
    } else {
        document.getElementById("tableDiv").style.display = "block";
        document.getElementById("menuButton").style.display = "none";
        document.getElementById("quizzes").style.display = "none";
        document.getElementById("quizDiv").style.display = "none";
        document.getElementById("testButton").innerText = "Test Yourself";
        hidden = false;
    }
}

function showQuiz(quizCategory) {
    document.getElementById("quizDiv").style.display = "none";
    document.getElementById("menuButton").style.display = "block";
    document.getElementById("quizzes").style.display = "block";
    switch (quizCategory.innerText) {
        case "Vowel Group":
            document.getElementById("vowel").style.display = "block";
            break;
        case "K Group":
            break;
        case "S Group":
            break;
        case "T Group":
            break;
        case "N Group":
            break;
        case "H Group":
            break;
        case "M Group":
            break;
        case "R Group":
            break;
        case "Y, W, & N Groups":
            break;
    }
}

function showMenu() {
    hidden = false;
    switchMode();
}