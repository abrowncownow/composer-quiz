//establish dom vars
var answer1 = document.getElementById("#answer1");
var answer2 = document.getElementById("#answer1");
var answer3 = document.getElementById("#answer1");
var answer4 = document.getElementById("#answer1");
var footer = document.getElementById(".footer");
//establish objects for quiz cards, questions, tracks
qCard = [

    {quote: `“Works of art make rules; rules do not make works of art.”`,
    person: "Claude Debussy",
    trackName: "Girl with the Flaxen Hair (Prelude No. 8)",
    src: "/assets/mp3s/Debussy_prelude-8-gwtfh.mp3",
    bg: `url("assets/images/piano_sheet_bg.jpg")`,
    choices: ["Maurice Ravel", "Ludwig van Beethoven", "Robert Schumann", "Claude Debussy"]},

    {quote: `“I should be sorry if I only entertained them. I wish to make them better.”`,
    person: "Handel",
    trackName: "Water Music (Alla Hornpipe)",
    src: "/assets/mp3s/handel_water_music_alla_hornpipe.mp3",
    bg: `url("assets/images/water_music.jpg")`,
    choices: ["Mozart", "Handel", "Bach", "Haydn"]},

    {quote: `“To copy the truth can be a good thing, but to invent the truth is better, much better.”`,
    person: "Giuseppe Verdi",
    trackName: "La donna è mobile",
    src: "/assets/mp3s/verdi_la_donna.mp3",
    bg: `url("assets/images/opera.jpg")`,
    choices: ["Pyotr Ilyich Tchaikovsky", "George Gershwin", "Giuseppe Verdi", "Johannes Brahms"]},

    {quote: `“Competitions are for horses, not artists.”`,
    person: "Bela Bartok",
    trackName: "Romanian Folk Dances",
    src: "/assets/mp3s/romanian_folk_dances.mp3",
    bg: `url("assets/images/opera.jpg")`,
    choices: ["Bela Bartok", "Igor Stravinsky", "Jean Sibelius", "Edward Elgar"]},

    {quote: `“So long as the human spirit thrives on this planet, music in some living form will accompany and sustain it.”`,
    person: "Aaron Copland"},

    {quote: `“Mournful and yet grand is the destiny of the artist.”`,
    person: "Franz Liszt"},

    {quote: `“Music begins where the possibilities of language end.”`,
    person: "Jean Sibelius"},

    {quote: `“I am hitting my head against the walls, but the walls are giving way.”`,
    person: "Gustav Mahler"},

    {quote: `“I frequently hear music in the heart of noise.”`,
    person: "George Gershwin"},

    {quote: `“Lesser artists borrow, great artists steal.”`,
    person: "Igor Stravinsky"},

    {quote: `“Inspiration is a guest that does not willingly visit the lazy.”`,
    person: "Pyotr Ilyich Tchaikovsky"},

    {quote: `“I always said God was against art and I still believe it.”`,
    person: "Edward Elgar"},

    {quote: `“Music, being identical with heaven, isn’t a thing of momentary thrills, or even hourly ones. It’s a condition of eternity.”`,
    person: "Gustav Holst"},

    {quote: `“Without craftsmanship, inspiration is a mere reed shaken in the wind.”`,
    person: "Johannes Brahms"},

    {quote: `“Don’t only practice your art, but force your way into its secrets.”`,
    person: "Ludwig van Beethoven"},

    {quote: `“There was no one near to confuse me, so I was forced to become original.”`,
    person: "Joseph Haydn"},

    {quote: `“If it is art, it is not for all, and if it is for all, it is not art.”`,
    person: "Arnold Schoenberg"},

    {quote: `“As a musician I tell you that if you were to suppress adultery, fanaticism, crime, evil, the supernatural, there would no longer be the means for writing one note.”`,
    person: "George Bizet"},

    {quote: `“Music is a pastime, a relaxation from more serious occupations.”`,
    person: "Alexander Borodin"},

    {quote: `“I was obliged to be industrious. Whoever is equally industrious will succeed equally well.”`,
    person: "J.S. Bach"},

    {quote: `“Nothing primes inspiration more than necessity.”`,
    person: "Giacchino Rossini"},

    {quote: `“The musician is perhaps the most modest of animals, but he is also the proudest.”`,
    person: "Erik Satie"},

    {quote: `“Simplicity is the final achievement. After one has played a vast quantity of notes and more notes, it is simplicity that emerges as the crowning reward of art.”`,
    person: "Frederic Chopin"},

    {quote: `“To send light into the darkness of men’s hearts – such is the duty of the artist.”`,
    person: "Robert Schumann"},

]
//score
var correct = 0;
var wrong = 0;

//timer
var count = $('#counter');
var currentTime = 30;
function timeRem(){ 
    count.text (currentTime);
    currentTime--;
    if (currentTime === 0){
        window.alert("Times up! Feel free to keep listening!");
        clearInterval (timerId);
        count.text("");
        return currentTime;}
}

$("#quote").text(`"A quote of the composer will be here"`);

//rando selection
var select = 2;
// var select = selectRando();
//rando code here
function selectRando(){
    random = Math.floor(Math.random * qCard.length);
    return random;
}


//Set Answers
function setAnswers(){
$("#answer-1").text(qCard[select].choices[0]);
$("#answer-2").text(qCard[select].choices[1]);
$("#answer-3").text(qCard[select].choices[2]);
$("#answer-4").text(qCard[select].choices[3]);
$("#answer-1").css({"background-color": ""});
$("#answer-2").css({"background-color": ""});
$("#answer-3").css({"background-color": ""});
$("#answer-4").css({"background-color": ""});
}

//reveal answer
function revealAnswer(){
    $("li").each(function() {
        console.log(this);
        var li = $(this).text();
        if (li == qCard[select].person){
            $(this).css({"background-color": "var(--lac)"})
        } else{
    $(this).css({"background-color": "var(--txc)"});}
  });
}


// setMusic();
function setMusic(){
    var audioPlayer = $('<audio controls src="" type="audio/mpeg"><p>audio broken</p></audio>');
    audioPlayer.attr("src", qCard[select].src);
    audioPlayer.attr("autoplay", "true");
    $(".footer").append(audioPlayer);
}
//setBackground();
function setBg(){
    $("html").css({"background-color": "black"});
    $("body").css({"background-image": qCard[select].bg});
    $("body").css({"background-color": "black"});
    $("body").css({"background-repeat": "no-repeat"});
    $("body").css({"background-size": "cover"});
}
//card update functions
        //quiz start
        //quiz next
        //quiz finish
//set trackname
function displayTrack(){
    var trackName = qCard[select].trackName;
    $(".question").text(`Listening to: "` + trackName + `" by ` + qCard[select].person);
}
//function answered
function answered(){
    gameState = "answered";
    revealAnswer();
    scoreBoard();
    $("#answer-btn").show();
    $("#answer-btn").text("Next");
    $("#answer-btn").click(runGame);
    displayTrack();
    
    
}

//scoreboard
function scoreBoard(){
    $(".score").text("Correct: " + correct + " Wrong: " + wrong);
}

//listen for start
var gameState = "landing";
$("#answer-btn").click(runGame);


//Main function
function runGame(){
    //hide start button
    $("#answer-btn").hide();
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
    var currentTime = 45;
    $("#counter").text(currentTime);
    let timerId = setInterval(timeRem, 1000)
    function timeRem(){ 
        $("#counter").text(currentTime);
        currentTime--;
         if (currentTime === 0){
            window.alert("Times up! Feel free to keep listening!");
            clearInterval (timerId);
            $("#counter").text("");
            wrong++;
            answered();
            return currentTime;}
        else if(gameState==="answered"){
            clearInterval(timerId);
        }
    }
    //score event
    function score(event){
        event.preventDefault()
        if (gameState =="running"){
            var response = $(this).text();
            console.log(response);
            if (response === qCard[select].person){
                clearInterval(timerId);
                correct++;
                console.log(correct);
                console.log(this);
                answered();
            }
            else {
                clearInterval(timerId);
                wrong++;
                console.log(wrong);
                console.log(this);
                answered();
            }
        }
    }
    //listen for answer selection
    $("#answer-list li").click(score)

}





