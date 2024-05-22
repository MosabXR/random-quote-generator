
/* Global Variables */

var quoteTextBox = document.querySelector('#quote-text');
var quoteAuthorBox = document.querySelector('#quote-author');
var quoteGenerateBtn = document.querySelector('#generate-btn');
var lastRandomNumber = null;

var quotes = [
    {
        quoteText: `Be yourself; everyone else is already taken.`,
        quoteAuthor: `Oscar Wilde`
    },
    {
        quoteText: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
        quoteAuthor: `Albert Einstein`
    },
    {
        quoteText: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
        quoteAuthor: `Dr. Seuss`
    },
    {
        quoteText: `You only live once, but if you do it right, once is enough.`,
        quoteAuthor: `Mae West`
    },
    {
        quoteText: `Be the change that you wish to see in the world.`,
        quoteAuthor: `Mahatma Gandhi`
    },
    {
        quoteText: `In three words I can sum up everything I've learned about life: it goes on.`,
        quoteAuthor: `Robert Frost`
    },
    {
        quoteText: `Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend`,
        quoteAuthor: `Albert Camus`
    },
    {
        quoteText: `If you tell the truth, you don't have to remember anything.`,
        quoteAuthor: `Mark Twain`
    },
    {
        quoteText: `Always forgive your enemies; nothing annoys them so much.`,
        quoteAuthor: `Oscar Wilde`
    },
    {
        quoteText: `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
        quoteAuthor: `Mahatma Gandhi`
    },
];

/* Main Functions */

function generateQuote() {

    var randomNumber;

    randomNumber = Math.floor(Math.random() * quotes.length);

    while (randomNumber == lastRandomNumber)
        randomNumber = Math.floor(Math.random() * quotes.length);

    quoteTextBox.innerHTML = `<p><em>"${quotes[randomNumber].quoteText}"</em></p>`;
    quoteAuthorBox.innerHTML = `<p><em>- ${quotes[randomNumber].quoteAuthor}</em></p>`;


    lastRandomNumber = randomNumber;
}

/* Action Listeners */

quoteGenerateBtn.addEventListener('click', function() {
    generateQuote();
});