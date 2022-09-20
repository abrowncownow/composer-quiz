//establish dom vars
var answer1 = document.getElementById("#answer1");
var answer2 = document.getElementById("#answer1");
var answer3 = document.getElementById("#answer1");
var answer4 = document.getElementById("#answer1");
var footer = document.getElementById(".footer");
//establish objects for quiz cards, questions, tracks
qCard = [
    {
        quote: `“Works of art make rules; rules do not make works of art.”`,
        person: "Claude Debussy",
        trackName: "Girl with the Flaxen Hair (Prelude No. 8)",
        src: "./assets/mp3s/prelude-8-gwtfh.mp3",
        bg: `url("assets/images/piano_sheet_bg.jpg")`,
        choices: [
            "Maurice Ravel",
            "Ludwig van Beethoven",
            "Robert Schumann",
            "Claude Debussy",
        ],
    },

    {
        quote: `“I should be sorry if I only entertained them. I wish to make them better.”`,
        person: "George Handel",
        trackName: "Water Music (Alla Hornpipe)",
        src: "./assets/mp3s/water_music_alla_hornpipe.mp3",
        bg: `url("assets/images/water_music.jpg")`,
        choices: [
            "Wolfgang Amadeus Mozart",
            "George Handel",
            "Johann Sebastian Bach",
            "Joseph Haydn",
        ],
    },

    {
        quote: `“To copy the truth can be a good thing, but to invent the truth is better, much better.”`,
        person: "Giuseppe Verdi",
        trackName: "La donna è mobile",
        src: "./assets/mp3s/la_donna.mp3",
        bg: `url("assets/images/opera.jpg")`,
        choices: [
            "Pyotr Ilyich Tchaikovsky",
            "George Gershwin",
            "Giuseppe Verdi",
            "Johannes Brahms",
        ],
    },

    {
        quote: `“Competitions are for horses, not artists.”`,
        person: "Bela Bartok",
        trackName: "Romanian Folk Dances",
        src: "./assets/mp3s/romanian_folk_dances.mp3",
        bg: `url("assets/images/hungary.jpg")`,
        choices: [
            "Bela Bartok",
            "Igor Stravinsky",
            "Jean Sibelius",
            "Edward Elgar",
        ],
    },

    {
        quote: `“Mournful and yet grand is the destiny of the artist.”`,
        person: "Franz Liszt",
        trackName: "Transcendental Etude No. 4",
        src: "./assets/mp3s/transcendental_no_4.mp3",
        bg: `url("assets/images/piano_fire.jpg")`,
        choices: [
            "Ludwig van Beethoven",
            "Frederic Chopin",
            "Sergei Prokofiev",
            "Franz Liszt",
        ],
    },

    {
        quote: `“The essence of the beautiful is unity in variety.”`,
        person: "Felix Mendelssohn",
        trackName: "Songs without Words, Op. 67 No. 2 & Op 62. No. 3",
        src: "./assets/mp3s/sww_67_2-62_3.mp3",
        bg: `url("assets/images/watercolor.jpg")`,
        choices: [
            "Frederic Chopin",
            "Robert Schumann",
            "Felix Mendelssohn",
            "Franz Schubert",
        ],
    },

    {
        quote: `“It is a mistake to think that the practice of my art has become easy to me.”`,
        person: "Wolfgang Amadeus Mozart",
        trackName: "Prelude & Fugue in C Major",
        src: "./assets/mp3s/prelude_fugue_c.mp3",
        bg: `url("assets/images/salzburg.jpg")`,
        choices: [
            "Franz Schubert",
            "Wolfgang Amadeus Mozart",
            "Johann Sebastian Bach",
            "Ludwig van Beethoven",
        ],
    },

    {
        quote: `“I was obliged to be industrious. Whoever is equally industrious will succeed equally well.”`,
        person: "Johann Sebastian Bach",
        trackName: "Keyboard Concerto in D minor (First Movement)",
        src: "./assets/mp3s/keyboard_concerto_dm.mp3",
        bg: `url("assets/images/keyboard_concerto.jpg")`,
        choices: [
            "Franz Schubert",
            "Wolfgang Amadeus Mozart",
            "Johann Sebastian Bach",
            "Ludwig van Beethoven",
        ],
    },

    {
        quote: `“Don’t only practice your art, but force your way into its secrets.”`,
        person: "Ludwig van Beethoven",
        trackName: "Piano Trio in E-Flat Major, Op. 70 no. 2 (Finale)",
        src: "./assets/mp3s/trio_eb_finale.mp3",
        bg: `url("assets/images/trio.jpg")`,
        choices: [
            "Franz Schubert",
            "Wolfgang Amadeus Mozart",
            "Felix Mendelssohn",
            "Ludwig van Beethoven",
        ],
    },

    {
        quote: `“When I wished to sing of love, it turned to sorrow. And when I wished to sing of sorrow, it was transformed for me into love.”`,
        person: "Franz Schubert",
        trackName: "Impromptu Op. 90 No. 4",
        src: "./assets/mp3s/impromptu_90_4.mp3",
        bg: `url("assets/images/steinway.jpg")`,
        choices: [
            "Franz Schubert",
            "Robert Schumann",
            "Felix Mendelssohn",
            "Ludwig van Beethoven",
        ],
    },
];
//score
var correct = 0;
var wrong = 0;
var points = 0;
var highScore = [];

$("#quote").text(`"A quote of the composer will be here"`);
$("#initials").hide();

//rando selection
var select = 0;
//rando function here
function selectRando() {
    rando = Math.floor(Math.random() * qCard.length);
    return rando;
}

//Set Answers
function setAnswers() {
    $("#answer-1").text(qCard[select].choices[0]);
    $("#answer-2").text(qCard[select].choices[1]);
    $("#answer-3").text(qCard[select].choices[2]);
    $("#answer-4").text(qCard[select].choices[3]);
    $("#answer-1").css({ "background-color": "" });
    $("#answer-2").css({ "background-color": "" });
    $("#answer-3").css({ "background-color": "" });
    $("#answer-4").css({ "background-color": "" });
}

//reveal answer
function revealAnswer() {
    $("li").each(function () {
        var li = $(this).text();
        if (li == qCard[select].person) {
            $(this).css({ "background-color": "var(--lac)" });
        } else {
            $(this).css({ "background-color": "var(--txc)" });
        }
    });
}

// setMusic();
function setMusic() {
    var audioPlayer = $(
        '<audio controls src="" type="audio/mpeg"><p>audio broken</p></audio>'
    );
    audioPlayer.attr("src", qCard[select].src);
    audioPlayer.attr("autoplay", "true");
    $(".footer").append(audioPlayer);
}
//setBackground();
function setBg() {
    $("html").css({ "background-color": "black" });
    $("body").css({ "background-image": qCard[select].bg });
    $("body").css({ "background-color": "black" });
    $("body").css({ "background-repeat": "no-repeat" });
    $("body").css({ "background-size": "cover" });
}

//scoreboard
function scoreBoard() {
    $(".score").text("Correct: " + correct + " Wrong: " + wrong);
}

//set trackname
function displayTrack() {
    var trackName = qCard[select].trackName;
    $(".question").text(
        `Listening to: "` + trackName + `" by ` + qCard[select].person
    );
}
//questions answered
var answeredQ = 0;
//function answered
function answered() {
    gameState = "answered";
    revealAnswer();
    scoreBoard();
    displayTrack();
    qCard.splice(select, 1);
    answeredQ++;
    if (answeredQ == 5) {
        gameState = "scoring";
        $("#answer-btn").hide();
        var finishBtn = $("<button/>")
            .text("Finish")
            .attr("id", "finish")
            .click(enterHS);
        $(".card").append(finishBtn);
    } else if (!(answeredQ == 5)) {
        $("#answer-btn").show();
        $("#answer-btn").text("Next");
    }
}

//Enter High Score
function enterHS(event) {
    event.preventDefault();
    //put stuff here
    $(".answers").hide();
    $(".timer").text("High Scores");
    $(".card-header").text("High Scores");
    $(".quote").text("Congratulations!");
    $("#finish").hide();
    $(".question").text(
        "You scored a total of " +
            points +
            " points! Enter your initials to submit your score."
    );
    $("#initials").show();
    $("#finish").show();
    $("#finish").text("Submit");
    $("#finish").click(submitHS);
}
//submit to local storage

function submitHS(event) {
    event.preventDefault();
    //local storage stuff
    var initials = $("#initials").val();
    var playerInfo = { initials: initials, points: points };
    var hsdl = localStorage.getItem("highscores");
    if (hsdl) {
        console.log("highscores: ", JSON.parse(hsdl));
        highScore = JSON.parse(hsdl);
    }
    highScore.push(playerInfo);
    localStorage.setItem("highscores", JSON.stringify(highScore));

    //adjust text
    $(".score").hide();
    $("#initials").hide();
    $(".quote").hide();
    $(".question").text("");
    createTable();
    $("#finish").hide();
    var playAgainBtn = $("<button/>")
        .text("Play Again")
        .attr("id", "playAgain")
        .click(function refresh() {
            window.location.replace("index.html");
        });
    $(".card").append(playAgainBtn);
}

//create HS table function
function createTable() {
    var table = $("<table/>").addClass("hsTable");
    var tHeader = $(
        "<tr><th>" + "Player" + "</th><th>" + "Points" + "</th>"
    ).addClass("tHeader");
    table.append(tHeader);
    for (i = 0; i < highScore.length; i++) {
        var row = $(
            "<tr><td>" +
                highScore[i].initials +
                "</td><td>" +
                highScore[i].points +
                "</td></tr>"
        ).addClass("bar");
        table.append(row);
    }
    $(".question").append(table);
}

var currentTime = 45;
function startClock2() {
    var interval = setInterval(function () {
        currentTime--;
        if (currentTime > 0) {
            $("#counter").text(currentTime);
        }
        if (gameState === "answered" || gameState === "scoring") {
            clearInterval(interval);
            return;
        }
        if (currentTime === 0) {
            $("#counter").text(currentTime);
            wrong++;
            clearInterval(interval);
            answered();
            window.alert("Times up! Feel free to keep listening!");
            return;
        }
    }, 1000);
}

//listen for start
var gameState = "landing";
$("#answer-btn").click(runGame);

//Main function
function runGame(event) {
    event.preventDefault();
    //hide start button
    $("#answer-btn").hide();
    //randomly select question
    select = selectRando();
    //initialize text

    $(".question").text("");
    $(".footer").text("");
    $(".quote").text(qCard[select].quote);
    //set Answers
    setAnswers();
    //set BGM
    setMusic();
    //set background image
    setBg();
    // update scoreboard
    scoreBoard();
    //set gamestate
    gameState = "running";
    //set timer
    currentTime = 45;
    startClock2();
    //listen for answer selection
    if (gameState == "running") {
        $("#answer-list li").click(score);
    }
    //score event
    function score(event) {
        event.preventDefault();
        if (gameState == "running") {
            var response = $(this).text();
            if (response === qCard[select].person) {
                points += currentTime;
                correct++;
                console.log(points);
                gameState = "answered";
                answered();
            } else if (!(response === qCard[select].person)) {
                wrong++;
                gameState = "answered";
                answered();
            }
        }
    }
}
