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
    
    var vowel = "あ,い,う,え,お";
    var k = "か,き,く,け,こ";
    var s = "さ,し,す,せ,そ";
    var t = "た,ち,つ,て,と";
    var n = "な,に,ぬ,ね,の";
    var h = "は,ひ,ふ,へ,ほ";
    var m = "ま,み,む,め,も";
    var r = "ら,り,る,れ,ろ";
    var ywn = "や,ゆ,よ,わ,を,ん";
    
    for (var i = 0; i < quiznos.length; i++) {
        quiznos[i].style.display = "none";
    }
    
    
    switch (quizCategory.innerText) {
        case "Vowel Group":
            document.getElementById("vowel").style.display = "block";
            buildQuiz(vowel, "vowel");
            break;
        case "K Group":
            document.getElementById("k").style.display = "block";
            buildQuiz(k, "k");
            break;
        case "S Group":
            document.getElementById("s").style.display = "block";
            buildQuiz(s, "s");
            break;
        case "T Group":
            document.getElementById("t").style.display = "block";
            buildQuiz(t, "t");
            break;
        case "N Group":
            document.getElementById("n").style.display = "block";
            buildQuiz(n, "n");
            break;
        case "H Group":
            document.getElementById("h").style.display = "block";
            buildQuiz(h, "h");
            break;
        case "M Group":
            document.getElementById("m").style.display = "block";
            buildQuiz(m, "m");
            break;
        case "R Group":
            document.getElementById("r").style.display = "block";
            buildQuiz(r, "r");
            break;
        case "Y, W, & N Groups":
            document.getElementById("ywn").style.display = "block";
            buildQuiz(ywn, "ywn");
            break;
    }
}

function showMenu() {
    hidden = false;
    switchMode();
}

function buildQuiz(quiz, name) {
    var quizDiv = document.getElementById(name);
    var kana = quiz.split(',');
    var romaji = ["a", "i", "u", "e", "o"];
    
    if (name != "vowel") {
        for (var i = 0; i < romaji.length; i++) {
            romaji[i] = name + romaji[i];
        }
    }
    
    if (name != "ywn") {
        for (var i = 0; i < kana.length * 2; i++) {
            var question = document.createElement("div");
            question.className = "question";
            quizDiv.appendChild(question);
            var n, answer;
            
            var questions = quizDiv.getElementsByClassName("question");
            
            for (var j = 0; j < questions.length; j++) {
                n = Math.floor((Math.random() * 10)) % 5;
                var qTitle = document.createElement("h2");
                if (i < 5) {
                    qTitle.innerText = "Can you identify which romaji matches this kana?";
                    
                    var symbol = document.createElement("h1");
                    symbol.innerText = kana[n];
                    answer = romaji[n];
                    
                } else {
                    qTitle.innerText = "Can you identify which kana matches this romaji?";
                    
                    var symbol = document.createElement("h1");
                    symbol.innerText = romaji[n];
                    answer = kana[n];
                }
            }
            questions[i].appendChild(symbol);
            questions[i].appendChild(qTitle);  
            var q = document.createElement("form");
                    q.setAttribute("name", ("q" + (i+1)));
                    questions[i].appendChild(q);
            
            var rightAnswer = document.createElement("input");
            rightAnswer.setAttribute("type", "radio");
            rightAnswer.setAttribute("name", answer);
            rightAnswer.setAttribute("class", "rightAnswer");
            rightAnswer.setAttribute("value", answer);
            q.appendChild(rightAnswer);
            
            var label = document.createElement("label");
            label.innerText = answer;
            q.appendChild(label);
            
            if (i < 5) {
                for (var i = 0; i < 3; i++) {
                    var otherAnswer = document.createElement("input");
                    rightAnswer.setAttribute("type", "radio");
                    rightAnswer.setAttribute("name", answer);
                    rightAnswer.setAttribute("value", answer);
                    q.appendChild(rightAnswer);

                    var label = document.createElement("label");
                    label.innerText = answer;
                    q.appendChild(label);

                }
            } else {
                for (var i = 0; i < 3; i++) {
                    var otherAnswer = document.createElement("input");
                    rightAnswer.setAttribute("type", "radio");
                    rightAnswer.setAttribute("name", answer);
                    rightAnswer.setAttribute("value", answer);
                    q.appendChild(rightAnswer);

                    var label = document.createElement("label");
                    label.innerText = answer;
                    q.appendChild(label);

                }
            }
        }
    }
}





































