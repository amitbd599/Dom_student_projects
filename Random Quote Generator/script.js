const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Your time is limited, don't waste it living someone else's life."
];

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById('quoteDisplay').textContent = `${quote}`;
}
