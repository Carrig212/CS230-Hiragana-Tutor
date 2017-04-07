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

//I truly do apologise to the javascript gods for the sheer amount of duplicate code in here
function buildQuiz(quiz, name) {
    //Clear the quiz div of old quizzes
    var quizDiv = document.getElementById(name);
    quizDiv.innerHTML = "";
    
    //Make arrays of the romaji and kana
    var kana = quiz.split(',');
    var romaji = ["a", "i", "u", "e", "o"];
    
    //Sort out the special case
    if (name == "ywn") {
        romaji = ["ya", "yu", "yo", "wa", "wo", "n"];
    }
    
    //Modify the romaji array if necessary
    if (name != "vowel" && name != "ywn") {
        //Just add the consonants to the start of the strings
        for (var i = 0; i < romaji.length; i++) {
            romaji[i] = name + romaji[i];
        }
    }

    //Create the question divs
    for (var i = 0; i < kana.length * 2; i++) {
        //Assign the class name and append the questions
        var question = document.createElement("div");
        question.className = "question";
        quizDiv.appendChild(question);

        //Create the random number for the right answer to be chosen by
        var n = Math.floor((Math.random() * 10)) % 5;

        //The first half are random kana questions
        if (i < 5) {
            //Create and add the question symbol for the kana
            var symbol = document.createElement("h1");
            symbol.innerText = kana[n];
            question.appendChild(symbol);

            //Create and add the question prompt
            var qText = document.createElement("h2");
            qText.className = "quizPrompt";
            qText.innerText = "Can you identify this kana?"
            question.appendChild(qText);

            //Create the form and add it to the question
            var qForm = document.createElement("form");
            qForm.setAttribute("name", "q" + (i+1));
            question.appendChild(qForm);

            //Now we create the correct answer to each question and add them to the forms
            var rightAnswer = document.createElement("input");
            rightAnswer.setAttribute("type", "radio");
            rightAnswer.setAttribute("name", "ans");
            rightAnswer.setAttribute("value", romaji[n]);
            rightAnswer.className = "correct";
            qForm.appendChild(rightAnswer);

            //Create and attach a label to the radio
            var label = document.createElement("label");
            label.innerText = romaji[n];
            qForm.appendChild(label);

            //Create a second random number array
            var randomArray = (name == "ywn") ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4];
            randomArray.sort(function(a, b){return 0.5 - Math.random()});
            var k = 0;

            //Now add the rest of the options
            for (var j = 0; j < 3; j++) {
                //Pick a random number and make sure its not the right answer (m == n)
                if (randomArray[k] == n) {
                    k++;
                }

                //Now we create the correct answer to each question and add them to the forms
                var answer = document.createElement("input");
                answer.setAttribute("type", "radio");
                answer.setAttribute("name", "ans");
                answer.setAttribute("value", romaji[randomArray[k]]);
                qForm.appendChild(answer);

                //Create and attach a label to the radio
                var label = document.createElement("label");
                label.innerText = romaji[randomArray[k]];
                qForm.appendChild(label);
                
                //Randomise the appearance of the answers
                if (Math.floor(Math.random() * 2) == 0) {
                    qForm.appendChild(answer);
                    qForm.appendChild(label);
                } else {
                    qForm.insertBefore(answer, rightAnswer);
                    qForm.insertBefore(label, rightAnswer);
                }

                //Move the k counter up
                k++;
            }
        } else { //The second half are romaji
            //Create and add the question symbol for the romaji too
            var symbol = document.createElement("h1");
            symbol.innerText = romaji[n];
            question.appendChild(symbol);

            //Create and add the question prompt
            var qText = document.createElement("h2");
            qText.className = "quizPrompt";
            qText.innerText = "Can you identify this romaji?"
            question.appendChild(qText);

            //Create the form and add it to the question
            var qForm = document.createElement("form");
            qForm.setAttribute("name", "q" + (i+1));
            question.appendChild(qForm);

            //Now we create the correct answer to each question and add them to the forms
            var rightAnswer = document.createElement("input");
            rightAnswer.setAttribute("type", "radio");
            rightAnswer.setAttribute("name", "ans");
            rightAnswer.setAttribute("value", kana[n]);
            rightAnswer.className = "correct";
            qForm.appendChild(rightAnswer);

            //Create and attach a label to the radio
            var label = document.createElement("label");
            label.innerText = kana[n];
            qForm.appendChild(label);

            //Create a second random number array
            var randomArray = (name == "ywn") ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4];
            randomArray.sort(function(a, b){return 0.5 - Math.random()});
            var k = 0;

            //Now add the rest of the options
            for (var j = 0; j < 3; j++) {
                //Pick a random number and make sure its not the right answer (m == n)
                if (randomArray[k] == n) {
                    k++;
                }

                //Now we create the correct answer to each question and add them to the forms
                var answer = document.createElement("input");
                answer.setAttribute("type", "radio");
                answer.setAttribute("name", "ans");
                answer.setAttribute("value", kana[randomArray[k]]);

                //Create and attach a label to the radio
                var label = document.createElement("label");
                label.innerText = kana[randomArray[k]];
                
                //Randomise the appearance of the answers
                if (Math.floor(Math.random() * 2) == 0) {
                    qForm.appendChild(answer);
                    qForm.appendChild(label);
                } else {
                    qForm.insertBefore(answer, rightAnswer);
                    qForm.insertBefore(label, rightAnswer);
                }

                //Move the k counter up
                k++;
            }
        }
    }
    
    var submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("onclick", "validate(this);");
    quizDiv.appendChild(submitButton);
}

function validate(quiz) {
    var questions = quiz.parentNode.getElementsByClassName("question");
    
    var score = 0;
    
    for (var i = 0; i < questions.length; i++) {
        var form = questions[i].getElementsByTagName("form");
        if (form[0].getElementsByClassName("correct")[0].checked) {
            score++;
        }
    }
    
    score /= questions.length;
    score *= 100;
    
    quiz.style.display = "none";
    
    var scoreDisplay = document.createElement("h2");
    scoreDisplay.className = "quizPrompt";
    scoreDisplay.innerText = ("You scored " + score + "%!");
    scoreDisplay.style.color = ((score > 40) ? "green" : "red");
    quiz.parentNode.insertBefore(scoreDisplay, questions[0]);
    scroll(0,0);
    doSleep(5000);
}

// I've heard this is best practice in industry when it comes to imitating java's sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function doSleep(ms) {
    await sleep(ms);
    showMenu();
}