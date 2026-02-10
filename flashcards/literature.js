// Literature Flashcard Data
const literatureCards = [
    { q: "Who wrote 'Romeo and Juliet'?", a: "William Shakespeare" },
    { q: "What is the name of the whale in Herman Melville's famous novel?", a: "Moby Dick" },
    { q: "Define an Onomatopoeia.", a: "A word that phonetically imitates the sound it describes (e.g., 'buzz')." },
    { q: "Who is the author of 'The Great Gatsby'?", a: "F. Scott Fitzgerald" },
    { q: "What is a 'soliloquy'?", a: "A speech in a play where a character speaks their thoughts aloud to themselves." }
];

// Register the subject with the main application
if (typeof registerSubject === 'function') {
    registerSubject('literature', literatureCards);
}
