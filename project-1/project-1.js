// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        person: "Thomas Edison"
    },
    {
        quote: "Whether you think you can or you think you can’t, you’re right.",
        person: "Henry Ford"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        person: "Steve Jobs"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        person: "Dalai Lama"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "Dream big and dare to fail.",
        person: "Norman Vaughan"
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        person: "George Addair"
    },
    {
        quote: "Don’t watch the clock; do what it does. Keep going.",
        person: "Sam Levenson"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        person: "Wayne Gretzky"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        person: "Henry David Thoreau"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        person: "Chris Grosser"
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        person: "Tim Notke"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        person: "Winston Churchill"
    }
];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})