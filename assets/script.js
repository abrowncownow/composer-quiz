//establish dom vars
var answerBtn = document.getElementById("#answer-btn");
var answer1 = document.getElementById("#answer1");
var answer2 = document.getElementById("#answer1");
var answer3 = document.getElementById("#answer1");
var answer4 = document.getElementById("#answer1");
//establish objects for quiz cards, questions, tracks
let quote = document.getElementsByClassName(".quote");
let audio = document.getElementById("#bgm");
const qCard = [{
    quote: `“Works of art make rules; rules do not make works of art.”`,
    person: "CLAUDE DEBUSSY",
    trackName: "Girl with the Flaxen Hair (Prelude No. 8)",
    src: "/assets/mp3s/Debussy_prelude-8-gwtfh.mp3"},

    {quote: `“I should be sorry if I only entertained them. I wish to make them better.”`,
    person: "Georg Frideric Handel"},

    {quote: `“To achieve great things, two things are needed; a plan, and not quite enough time.”`,
    person: "Leonard Bernstein"},

    {quote: `“To copy the truth can be a good thing, but to invent the truth is better, much better.”`,
    person: "Giuseppe Verdi"},

    {quote: `“Competitions are for horses, not artists.”`,
    person: "Bela Bartok"},

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
//navbar function

//background music function

//card update functions
        //quiz start
            //unhide navbar and footer
        //quiz submit
        //quiz next
        //quiz finish
//EXTRA:footer with volume controls and display track title
