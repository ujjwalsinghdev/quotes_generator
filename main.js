const quotes = [{
        name: "Ralph Waldo Emerson",
        quote: "Common sense is genius dressed in its working clothes"
    },

    {
        name: "Chinese Proverb",
        quote: "Deal with the faults of others as gently as your own."

    },

    {
        name: "Friedrich Nietzsche",
        quote: "He who has a why to live can bear almost any how."
    },

    {
        name: "Korean (on common sense)",
        quote: "Even a fish wouldn't get into trouble if it kept its mouth shut."
    },

    {
        name: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken."
    },

    {
        name: "Soren Kierkegaard",
        quote: "Life is not a problem to be solved, but a reality to be experienced."
    },


    {
        name: "David Russell ",
        quote: "The hardest thing to learn in life is which bridge to cross and which bridge to burn."
    },

    {
        name: "Winston Churchill",
        quote: "We make a living by what we get. We make a life by what we give."
    },

    {
        name: "Sophia Loren",
        quote: "Mistakes are part of the dues one pays for a full life."
    },

    {
        name: "John Powell",
        quote: "The only real mistake is the one from which we learn nothing."
    },
]

const quoteBtn = document.querySelector('#quoteBtn')


const quoteAuthor = document.querySelector('#quoteAuthor')

const quote = document.querySelector('#quote')







quoteBtn.addEventListener('click', displayQuote)

function displayQuote() {


    let number = Math.floor(Math.random() * quotes.length)

    // console.log(number);

    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;



}