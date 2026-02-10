// History Flashcard Data
const historyCards = [
    { q: "Who was the first President of the United States?", a: "George Washington" },
    { q: "In what year did World War II end?", a: "1945" },
    { q: "Which empire was ruled by Julius Caesar?", a: "The Roman Empire" },
    { q: "What was the Magna Carta?", a: "A royal charter of rights agreed to by King John of England in 1215." },
    { q: "Who was the 'Sun King' of France?", a: "Louis XIV" }
];

// Register the subject with the main application
if (typeof registerSubject === 'function') {
    registerSubject('history', historyCards);
}
