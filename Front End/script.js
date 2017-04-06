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
    var quiznos = document.getElementsByClassName("quiz");
    
    for (var i = 0; i < quiznos.length; i++) {
        quiznos[i].style.display = "none";
    }
    
    switch (quizCategory.innerText) {
        case "Vowel Group":
            document.getElementById("vowel").style.display = "block";
            break;
        case "K Group":
            document.getElementById("k").style.display = "block";
            break;
        case "S Group":
            document.getElementById("s").style.display = "block";
            break;
        case "T Group":
            document.getElementById("t").style.display = "block";
            break;
        case "N Group":
            document.getElementById("n").style.display = "block";
            break;
        case "H Group":
            document.getElementById("h").style.display = "block";
            break;
        case "M Group":
            document.getElementById("m").style.display = "block";
            break;
        case "R Group":
            document.getElementById("r").style.display = "block";
            break;
        case "Y, W, & N Groups":
            document.getElementById("ywn").style.display = "block";
            break;
    }
}

function showMenu() {
    hidden = false;
    switchMode();
}

/*	a	i	u	e	o
∅	あ	い	う	え	お
k	か	き	く	け	こ
s	さ	し	す	せ	そ
t	た	ち	つ	て	と
n	な	に	ぬ	ね	の
h	は	ひ	ふ	へ	ほ
m	ま	み	む	め	も
y	や		ゆ		 よ
r	ら	り	る	れ	ろ
w	わ	ゐ		ゑ	を
ん */